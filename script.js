// Select DOM elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Event Listener for Add Button
addBtn.addEventListener('click', addTodo);

// Event Listener for Enter key
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});

// Feature: Check Complete (Thành) - Using Event Delegation
// Lắng nghe sự kiện change trên toàn bộ danh sách, nhưng chỉ xử lý nếu là checkbox
todoList.addEventListener('change', (e) => {
    if (e.target.classList.contains('check-btn')) {
        toggleComplete(e.target);
    }
});

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText === '') {
        alert('Please enter a task');
        return;
    }

    // Create Todo Item (li)
    const todoItem = document.createElement('li');
    
    // Create Checkbox (Check Complete Feature)
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('check-btn');
    
    // Create Span for text
    const span = document.createElement('span');
    span.innerText = todoText;

    // Append elements to li
    todoItem.appendChild(checkbox);
    todoItem.appendChild(span);

    // Append li to list
    todoList.appendChild(todoItem);

    // Clear input
    todoInput.value = '';
}

// Logic xử lý check complete
function toggleComplete(checkbox) {
    const todoItem = checkbox.parentElement;
    const span = todoItem.querySelector('span');

    if (checkbox.checked) {
        span.classList.add('completed');
    } else {
        span.classList.remove('completed');
    }
}
