function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    let title = newToDoText.value;
    let newLi = document.createElement('li');
    let checkbox = document.createElement('input');
    let deleteButton = document.createElement('button');
    checkbox.type = "checkbox";
    deleteButton.type = "reset";

    newLi.textContent = title;
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteButton);
    deleteButton.textContent = "Remove";
    deleteButton.addEventListener('click', removeList, false);
    toDoList.appendChild(newLi);

    newToDoText.value = '';
  });
}
function removeList() {
  this.parentNode.parentNode.removeChild(this.parentNode);
}


window.onload = function() {
   onReady();
 };
