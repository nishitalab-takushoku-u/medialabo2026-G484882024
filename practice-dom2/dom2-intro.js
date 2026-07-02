function changeDom() {

    // 要素の新規作成
    let l = document.createElement('li');
    l.textContent = 'ヨット';

    let u = document.querySelector('ul#kazoeuta');
    u.insertAdjacentElement('beforeend', l);

    // 属性の変更（画像）
    let i = document.querySelector('img#bluemoon');
    i.setAttribute('src', 'bluemoon.jpg');

    // 属性の変更（リンク）
    let a = document.createElement('a');
    a.textContent = '拓殖大学HP';
    a.setAttribute('href', 'https://www.takushoku-u.ac.jp');

    let p = document.querySelector('p#takudai');
    p.insertAdjacentElement('afterend', a);

    // 要素の削除（餅を削除）
    l = document.querySelector('li#mochi');
    l.remove();

    // 要素の削除（箇条書きを削除）
    u = document.querySelector('ul#kassen');
    u.remove();

    // 複雑な新規要素の作成
    u = document.createElement('ul');

    l = document.createElement('li');
    l.textContent = '赤';
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    l.textContent = '緑';
    u.insertAdjacentElement('beforeend', l);

    l = document.createElement('li');
    l.textContent = '青';
    u.insertAdjacentElement('beforeend', l);

    p = document.querySelector('p#primary');
    p.insertAdjacentElement('afterend', u);
}

// ボタンを押したら changeDom() を実行
let button = document.querySelector('#henkou');
button.addEventListener('click', changeDom);