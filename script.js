let items = [];

function addItem() {
    let ul = document.getElementById('ul');
    let li = document.createElement('li');
    let a  = document.createElement('a');
        a.addEventListener("click", function() {
            if(a.innerHTML.includes(" - Completed")){
               a.innerHTML = a.innerHTML.replace(" - Completed", " ");
               a.style.color = "currentColor";
            } else {
                a.style.color = "green";
                a.append(" - Completed");
            }
        });
    for (i = 0; i < items.length; i++) {
        ul.appendChild(li);
        li.appendChild(a).innerHTML = items[i];
    }
}

let form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    let item = document.getElementById('itemInput').value;
        items.push(item);
        addItem();
        form.reset();
})

