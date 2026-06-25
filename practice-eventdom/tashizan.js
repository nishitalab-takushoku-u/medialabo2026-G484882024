let b = document.querySelector('#calc');
b.addEventListener('click', tashizan);

function tashizan() {
    let left = Number(document.querySelector('#left').value);
    let right = Number(document.querySelector('#right').value);

    document.querySelector('#answer').textContent = left + right;
}