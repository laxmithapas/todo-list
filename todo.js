"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var Todo = /** @class */ (function () {
    function Todo() {
        this.tasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
    };
    Todo.prototype.removeTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
        else {
            console.log("Task not found.");
        }
    };
    Todo.prototype.listTasks = function () {
        if (this.tasks.length === 0) {
            console.log("No tasks to show.");
        }
        else {
            console.log("To-Do List:");
            this.tasks.forEach(function (task, index) {
                console.log("".concat(index + 1, ". ").concat(task));
            });
        }
    };
    return Todo;
}());
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var todo = new Todo();
function getInput(prompt) {
    return new Promise(function (resolve) {
        rl.question(prompt, function (answer) {
            resolve(answer);
        });
    });
}
function showMenu() {
    return __awaiter(this, void 0, void 0, function () {
        var action, _a, taskToAdd, taskToRemove;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getInput('What would you like to do? (add, remove, list, exit): ')];
                case 1:
                    action = _b.sent();
                    action = action.trim().toLowerCase();
                    _a = action;
                    switch (_a) {
                        case 'add': return [3 /*break*/, 2];
                        case 'remove': return [3 /*break*/, 4];
                        case 'list': return [3 /*break*/, 6];
                        case 'exit': return [3 /*break*/, 7];
                    }
                    return [3 /*break*/, 8];
                case 2: return [4 /*yield*/, getInput('Enter the task to add: ')];
                case 3:
                    taskToAdd = _b.sent();
                    todo.addTask(taskToAdd);
                    console.log("Task \"".concat(taskToAdd, "\" added."));
                    showMenu();
                    return [3 /*break*/, 9];
                case 4: return [4 /*yield*/, getInput('Enter the task to remove: ')];
                case 5:
                    taskToRemove = _b.sent();
                    todo.removeTask(taskToRemove);
                    showMenu();
                    return [3 /*break*/, 9];
                case 6:
                    todo.listTasks();
                    showMenu();
                    return [3 /*break*/, 9];
                case 7:
                    rl.close();
                    return [3 /*break*/, 9];
                case 8:
                    console.log('Invalid option. Please choose again.');
                    showMenu();
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    });
}
showMenu();
