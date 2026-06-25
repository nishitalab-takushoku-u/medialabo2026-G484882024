// 乱数を使って正解を作る
let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数
let kaisu = 0;

// ゲーム終了フラグ
let owari = false;

function hantei() {

    if (owari || kaisu >= 3) {
        let p = document.querySelector('#result');
        p.textContent = '答えは ' + kotae + ' でした．すでにゲームは終わっています';
        return;
    }

    kaisu++;

    let span = document.querySelector('#kaisu');
    span.textContent = kaisu;

    let i = document.querySelector('#yoso');
    let yoso = Number(i.value);

    let y = document.querySelector('#yosokekka');
    y.textContent = yoso;

    let p = document.querySelector('#result');

    if (yoso === kotae) {
        p.textContent = '正解です．おめでとう!';
        owari = true;
    }
    else if (kaisu === 3) {
        p.textContent = 'まちがい．残念でした．答えは ' + kotae + ' です．';
        owari = true;
    }
    else if (yoso < kotae) {
        p.textContent = 'まちがい．答えはもっと大きいですよ';
    }
    else {
        p.textContent = 'まちがい．答えはもっと小さいですよ';
    }
}

let b = document.querySelector('#kaito');
b.addEventListener('click', hantei);