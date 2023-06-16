$(document).ready(function () {
  //focus on the taskInput field when the page loads
  $('#taskInput').focus();

  //function to add a new task
  function addTask() {
    const task = $('#taskInput').val();

    if (task !== '') {
      $('#taskList').append(
        `<li class="taskItem"><input type="checkbox" class="checkbox">${capitalizeFirstLetter(
          task
        )}<button class="delete">X</button></li>`
      );
      $('#taskInput').val('');
      updateStorage();
      $('#taskInput').focus();
    } else {
      $('#taskInput').focus();

      $('#taskInput').attr('placeholder', 'Please enter a task!');
      $('#taskInput').css('backgroundColor', 'rgba(255, 0, 0, 0.3)');
      $('#taskInput').css('color', 'white');

      setTimeout(function () {
        $('#taskInput').attr('placeholder', 'Add a new task...');
        $('#taskInput').css('color', 'black');
        $('#taskInput').css('backgroundColor', 'white');
      }, 1000);
    }
  }

  //function to remove a task
  function removeTask() {
    $(this).parent().remove();
    $('#taskInput').focus();
    updateStorage();
  }

  //function to toggle a task as complete
  function toggleComplete() {
    $(this).parent().toggleClass('complete');
    updateStorage();
  }

  //function to clear all tasks
  function clearAll() {
    $('#taskList').empty();
    updateStorage();
    $('#taskInput').focus();
  }

  //function to clear completed tasks
  function clearCompleted() {
    $('.complete').remove();
    updateStorage();
    $('#taskInput').focus();
  }

  //function to toggle show/hide completed tasks
  function toggleCompletedTasks() {
    $('#toggleShowCompleted').text() === 'Show Completed'
      ? $('#toggleShowCompleted').text('Hide Completed')
      : $('#toggleShowCompleted').text('Show Completed');
    $('.complete').toggle();
  }

  //function to update local storage with task list
  function updateStorage() {
    const taskList = $('#taskList').html();
    localStorage.setItem('taskList', taskList);
  }

  //function to load task list from local storage
  function loadStorage() {
    const taskList = localStorage.getItem('taskList');
    $('#taskList').html(taskList);

    //if any items have a class of complete, check the checkbox
    $('.taskItem').each(function () {
      if ($(this).hasClass('complete')) {
        $(this).children('.checkbox').prop('checked', true);
      }
    });
  }

  //function to auto capitalize first letter of task
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  //event handlers
  $('#addTaskButton').on('click', addTask);
  $('#taskList').on('click', '.delete', removeTask);
  $('#taskList').on('click', '.checkbox', toggleComplete);
  $('#clearAllButton').on('click', clearAll);
  $('#clearCompletedButton').on('click', clearCompleted);
  $('#toggleShowCompleted').on('click', toggleCompletedTasks);

  //if taskInput has focus and enter is pressed, add task
  $('#taskInput').keypress(function (e) {
    if (e.which === 13) {
      addTask();
    }
  });

  loadStorage();
});
