document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("#search")
        .addEventListener("click", sendRequest);

    document.querySelector("#keyword")
        .addEventListener("keydown", function (event) {

            if (event.key === "Enter") {
                sendRequest();
            }

        });
});

function sendRequest() {

    let key = document.querySelector("#keyword").value;

    let url =
        "https://www.nishita-lab.org/web-contents/jsons/hotpepper/"
        + key +
        ".json";

    axios.get(url)
        .then(showResult)
        .catch(showError)
        .then(finish);
}

function showResult(resp) {

    let data = resp.data;

    if (typeof data === "string") {
        data = JSON.parse(data);
    }

    printDom(data);
}

function printDom(data) {

    let old = document.querySelector("#result");

    if (old) {
        old.remove();
    }

    let div = document.createElement("div");
    div.id = "result";

    document.body.appendChild(div);

    let genreName =
        document.querySelector("#keyword").options[
            document.querySelector("#keyword").selectedIndex
        ].text;

    let title = document.createElement("h2");
    title.textContent =
        genreName + " の検索結果 : " +
        data.results.shop.length + "件";

    div.appendChild(title);

    if (data.results.shop.length === 0) {

        let p = document.createElement("p");
        p.textContent = "該当する店舗はありません。";
        p.style.fontWeight = "bold";
        p.style.margin = "20px 0";

        div.appendChild(p);

        return;
    }

    for (let shop of data.results.shop) {

        let dl = document.createElement("dl");

        let h3 = document.createElement("h3");
        h3.textContent = shop.name;
        dl.appendChild(h3);

        let items = [
            ["アクセス", shop.access],
            ["住所", shop.address],
            ["予算", shop.budget ? shop.budget.name : "なし"],
            ["キャッチコピー", shop.catch],
            ["ジャンル", shop.genre ? shop.genre.name : "なし"],
            ["営業時間", shop.open],
            ["最寄駅", shop.station_name],
            ["サブジャンル", shop.sub_genre ? shop.sub_genre.name : "なし"]
        ];

        for (let item of items) {

            let dt = document.createElement("dt");
            dt.textContent = item[0];

            let dd = document.createElement("dd");
            dd.textContent = item[1];

            dl.appendChild(dt);
            dl.appendChild(dd);
        }

        div.appendChild(dl);
    }
}

function showError(err) {
    console.log(err);
}

function finish() {
    console.log("Ajax 通信が終わりました");
}