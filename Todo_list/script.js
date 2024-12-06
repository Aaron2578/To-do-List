var input = document.getElementById('inputsValue');
var ul = document.getElementById('list_container');

function update() {
    var listItem = document.createElement('li');
    listItem.innerHTML=input.value + '<button onclick="remove(event)">Delete</button>';
    
    ul.append(listItem)
}

function remove(event) {
    event.target.parentElement.remove();
    
}