const btnAdd = document.querySelector('.btn-add');
btnAdd.addEventListener('click', addTask);
function addTask() {
   const valueIn = document.getElementById('inputIn');
   const valueGet = valueIn.value;
   const newLi = document.createElement('li');
   newLi.classList.add('li');
   newLi.textContent = valueGet;
   item.append(newLi);
   valueIn.value = "";

   const btnRemoveTask = document.querySelector('.btn-remove');
   btnRemoveTask.addEventListener('click', removeTask);
   function removeTask() {
      newLi.classList.add('remove');
      // item.textContent = "нет задач"
   }

}

