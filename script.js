document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value;
        if (taskText === '') return;
        
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="editButton">Edit</button>
            <button class="completeButton">Complete</button>
            <button class="deleteButton">Delete</button>
        `;
        taskList.appendChild(li);

        taskInput.value = '';

        li.querySelector('.completeButton').addEventListener('click', () => {
            li.querySelector('span').classList.toggle('completed');
        });

        li.querySelector('.deleteButton').addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.querySelector('.editButton').addEventListener('click', () => {
            const span = li.querySelector('span');
            const currentText = span.textContent;
            
            const input = document.createElement('input');
            input.type = 'text';
            input.value = currentText;
            input.classList.add('editInput');

            li.replaceChild(input, span);

            const editButton = li.querySelector('.editButton');
            editButton.textContent = 'Save';

            editButton.addEventListener('click', () => {
                const newText = input.value.trim();
                if (newText === '') return;
                
                const newSpan = document.createElement('span');
                newSpan.textContent = newText;

                li.replaceChild(newSpan, input);

                editButton.textContent = 'Edit';
            }, { once: true }); 
        });
    });
});
