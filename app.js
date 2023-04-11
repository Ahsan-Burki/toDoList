let inputFeild = document.querySelector('.input-feild');
let inputVal;
let submitBtn = document.querySelector('.submit-btn');
let myOl = document.querySelector('.myOl');

submitBtn.addEventListener('click', () => {
  inputVal = inputFeild.value;
  inputFeild.value = ""; // Clear the input field

  let newLi = document.createElement('li');
  myOl.appendChild(newLi);
  let newTaskItem = document.createElement('div');
  newTaskItem.className = "task-item";
  newLi.appendChild(newTaskItem);
  let delBtn = document.createElement('button');
  delBtn.className = "delete-task btn";
  let delIcon = document.createElement('i');
  delIcon.className = "fa-solid fa-trash";
  delBtn.appendChild(delIcon);
  let newP = document.createElement('p');
  if (inputVal.length > 40) { // Check if input value is longer than 30 characters
    let text1 = inputVal.substring(0, 45);
    let text2 = inputVal.substring(45);
    newP.innerHTML = text1 + "<br>" + text2; // Insert line break between text1 and text2

  } else {
    newP.textContent = inputVal;
  }
  newTaskItem.appendChild(delBtn);
  newTaskItem.appendChild(newP);
  let completedTask = document.createElement('button');
  completedTask.className = "completed-task btn";
  let newCompleteIcon = document.createElement('i');
  newCompleteIcon.className = "fa-solid fa-check";
  completedTask.appendChild(newCompleteIcon);
  newTaskItem.appendChild(completedTask);

  let deBtn = document.querySelector('.delete-task');
  delBtn.addEventListener('click', () => {
    let listItem = document.querySelector('.task-item');
    listItem.remove();
  });

  let completeBtn = document.querySelector('.completed-task');
  completeBtn.addEventListener('click',()=>{
    let completeTxt = document.querySelector('p');
    completeTxt.style.textDecoration = "line-through";
    completeTxt.style.color = "grey";

  });
});


//   let editTask = document.createElement('button');
//   editTask.className = "edit-task btn";
//   let editIcon = document.createElement('i');
//   editIcon.className = "fa-solid fa-pen";
//   editTask.appendChild(editIcon);
//   newTaskItem.appendChild(editTask);