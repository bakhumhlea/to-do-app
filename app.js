function onReady() {
    const toDos = []; //empty//
    const addToDoForm = document.getElementById('addToDoForm'); //waiting submit//
    //function for creating a to do list as an object//
    function createNewToDo() { //waiting submit//
      const newToDoText = document.getElementById('newToDoText');
      if (newToDoText.value === '') {
        alert("Need Title!");
      } else { //the condition which prevent empty input//
        toDos.push({
          title: newToDoText.value,
          complete: false
        });
      }
    newToDoText.value = ''; //empty value of newToDoText//

    renderTheUI(toDos); //waiting for call//
    console.log(toDos);
    }
    //end of createNewToDo function//

    //render UI function. use to create a <ul> interface with (a) newLi<li>//
    function renderTheUI(toDos) { //wait cuz the <ul> is empty//
      const toDoList = document.getElementById('toDoList');

      toDoList.textContent = ''; //empty 'toDoList'(<ul>)//
      var i=0;
      toDos.forEach(function(toDo){
        const newLi = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.checked = '';
        checkbox.dataset.lineNumber = i;
        const deleteButton = document.createElement('button');
        deleteButton.name = 'close';
        deleteButton.textContent = 'Remove';
        deleteButton.dataset.lineNumber = i;
        deleteButton.addEventListener('click', removeList, false);

        newLi.textContent = toDo.title;

        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);
        newLi.appendChild(deleteButton);
        i++;
      })
    }
    //end of function//
    function removeList() {
      var i = this.dataset.lineNumber;
      toDos.splice(i,1);

      renderTheUI(toDos);
    }

    //event listener for executing the function 'createNewTodo' after clicking submit button//
    addToDoForm.addEventListener('submit',event => { //wait for clicking 'submit'//
      event.preventDefault();
      createNewToDo();
    })
    //end of eventListener//

    renderTheUI(toDos); //*The first(and only) time render this function//
}


//the very first function to call//
window.onload = function() {
   onReady(); //*run this function at line 1//
 };
