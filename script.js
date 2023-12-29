function openTodoList(event) {
    event.preventDefault();

    // Get username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Show the todo list container
    const todoListContainer = document.getElementById('todoListContainer');

    // Hide the login form
    document.getElementById('loginForm').style.display = 'none';

    // Display the todo list container
    todoListContainer.style.display = 'block';

    // Add some initial tasks to the todo list
    const todoList = document.getElementById('todoList');
    const tasks = ['Task 1', 'Task 2', 'Task 3'];

    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        todoList.appendChild(listItem);
    });
}
