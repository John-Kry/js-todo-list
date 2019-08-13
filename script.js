let items = [];
window.onload = function () {
    if (localStorage.getItem('items')){
        items = JSON.parse(localStorage.getItem('items'))
        createSavedItems()
    }
}
function addItem() {
    let ul = document.getElementById('ul');
    let li = document.createElement('li');
    let a = createaWithEventListener();
    for (i = 0; i < items.length; i++) {
        ul.appendChild(li);
        li.appendChild(a).innerHTML = items[i];
    }
}
function createaWithEventListener(){
    let a = document.createElement('a');
    a.addEventListener("click", function () {
        if (a.innerHTML.includes(" - Completed")) {
            a.innerHTML = a.innerHTML.replace(" - Completed", " ");
            a.style.color = "currentColor";
        } else {
            a.style.color = "green";
            a.append(" - Completed");
        }
    });
    return a
}
function createSavedItems() {
    let ul = document.getElementById('ul');
    for (i = 0; i < items.length; i++) {
        let li = document.createElement('li');
        let a = createaWithEventListener()
        ul.appendChild(li);
        li.appendChild(a).innerHTML = items[i];
    }
}

let form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let item = document.getElementById('itemInput').value;
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items))
    addItem();
    form.reset();
})

