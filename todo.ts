import * as readline from 'readline';

class Todo {
    private tasks: string[] = [];

    addTask(task: string): void {
        this.tasks.push(task);
    }

    removeTask(task: string): void {
        const index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
        } else {
            console.log("Task not found.");
        }
    }

    listTasks(): void {
        if (this.tasks.length === 0) {
            console.log("No tasks to show.");
        } else {
            console.log("To-Do List:");
            this.tasks.forEach((task, index) => {
                console.log(`${index + 1}. ${task}`);
            });
        }
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const todo = new Todo();

function getInput(prompt: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(prompt, (answer) => {
            resolve(answer);
        });
    });
}

async function showMenu() {
    let action = await getInput('What would you like to do? (add, remove, list, exit): ');
    action = action.trim().toLowerCase();

    switch(action) {
        case 'add':
            const taskToAdd = await getInput('Enter the task to add: ');
            todo.addTask(taskToAdd);
            console.log(`Task "${taskToAdd}" added.`);
            showMenu();
            break;

        case 'remove':
            const taskToRemove = await getInput('Enter the task to remove: ');
            todo.removeTask(taskToRemove);
            showMenu();
            break;

        case 'list':
            todo.listTasks();
            showMenu();
            break;

        case 'exit':
            rl.close();
            break;

        default:
            console.log('Invalid option. Please choose again.');
            showMenu();
            break;
    }
}

showMenu();
