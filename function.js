document.getElementById('addButton').addEventListener('click', function() {
  var taskInput = document.getElementById('taskInput');
  var taskList = document.getElementById('taskList');

  if (taskInput.value == "") {
    alert("Please fill in the blanks.");
    return;
  }

  if (taskInput.value.trim() !== '') {
    var li = document.createElement('li');
    var taskText = document.createElement('span');
    taskText.textContent = taskInput.value;
    li.appendChild(taskText);

    var doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.classList.add('done-button');
    doneButton.addEventListener('click', function() {
      li.classList.toggle('completed');
    });
    li.appendChild(doneButton);

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function() {
      li.parentNode.removeChild(li);
    });
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    taskInput.value = '';
  }
});
