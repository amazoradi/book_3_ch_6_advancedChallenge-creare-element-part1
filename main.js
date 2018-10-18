const list = document.createElement('ul');

const listItem =document.createElement('li');
listItem.className = "president"
listItem.textContent = "George Bush"

list.appendChild(listItem)


document.body.appendChild(list)

console.log(list)