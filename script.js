const btnAdd = document.querySelector('.btn-add');
const taskList = document.querySelector('#item');
const emptyList = document.querySelector('#list1');


btnAdd.addEventListener('click', addTask);

//добавляем задачу на страницу
function addTask() {
   const valueIn = document.getElementById('inputIn');
   const valueGet = valueIn.value;
   const taskHtml = `
   <li class="list-group-item df">
					<span >${valueGet}</span>
					<div class="div-btn">
						 <input class="add-checked" type="checkbox" name="" id="checkbox" >
					</div>
				</li>`;
   taskList.insertAdjacentHTML('beforeend', taskHtml);
   valueIn.value = "";
   btnRemoveTask.disabled = false;
   if (taskList.children.length >= 2) {
      emptyList.classList.add('remove');
   }
}


const btnRemoveTask = document.querySelector('.btn-remove');
btnRemoveTask.setAttribute('disabled', '');
btnRemoveTask.addEventListener('click', removeTask);
function removeTask() {
   emptyList.classList.remove('remove');
   var i = taskList.children.length;
   for (let index = i; index >= 0; index--) {
      taskList.lastChild.remove();
   }
   btnRemoveTask.disabled = true;
}


// //Отмечаем задачу завершенной
taskList.addEventListener('click', doneTask);
function doneTask(evt) {
   if (evt.target.tagName === ('INPUT')) {
      let inputs = document.querySelectorAll('.add-checked');
      inputs.forEach((input) => {
         console.log('выбран');
         input.classList.toggle('check');
      })
   }

   // или этот
   // let inputs = document.querySelectorAll('.add-checked');
   // inputs.forEach((input) => {
   //    if (input.checked) {
   //       console.log('выбран');
   //       input.classList.toggle('check');
   //    }
   // })

}

