
# To-Do List Application (TypeScript)

A simple command-line to-do list application built with TypeScript. The application allows users to add, remove, and list tasks interactively.

## Features
- **Add tasks**: Users can add tasks to the to-do list.
- **Remove tasks**: Users can remove tasks by specifying the task name.
- **List tasks**: Displays all tasks in the to-do list.
- **Exit**: Exit the application.

## Prerequisites
- [Node.js](https://nodejs.org/) (Version 12.x or higher)
- [TypeScript](https://www.typescriptlang.org/)

## Installation

### Step 1: Install Node.js and TypeScript
If you don’t have Node.js installed, download it from [nodejs.org](https://nodejs.org/).

Install TypeScript globally using npm:
```bash
npm install -g typescript
```

### Step 2: Clone or Download the Repository
Clone the repository (or download the project folder) to your local machine.

```bash
git clone https://github.com/your-username/todo-app-typescript.git
```

### Step 3: Install Dependencies (Optional)
If you are using Node.js modules or packages, install any dependencies (if needed):
```bash
npm install
```

### Step 4: Compile TypeScript
Compile the TypeScript code into JavaScript using the TypeScript compiler (`tsc`):
```bash
tsc todo.ts
```

This will generate a `todo.js` file.

### Step 5: Run the Application
Run the compiled JavaScript file using Node.js:
```bash
node todo.js
```

## Usage
After running the application, you will be prompted with a menu of actions:

- **add**: Add a new task to your to-do list.
- **remove**: Remove an existing task by name.
- **list**: List all tasks in your to-do list.
- **exit**: Exit the application.

### Example Interaction
```bash
What would you like to do? (add, remove, list, exit): add
Enter the task to add: Buy groceries
Task "Buy groceries" added.
What would you like to do? (add, remove, list, exit): list
To-Do List:
1. Buy groceries
What would you like to do? (add, remove, list, exit): exit
```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author
-GitHub: https://github.com/laxmithapas
