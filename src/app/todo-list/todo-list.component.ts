import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todoItems = [
    { id: 1, name: 'Buy groceries', complete: false },
    { id: 2, name: 'Finish homework', complete: false },
    { id: 3, name: 'Go for a run', complete: true },
  ];

  onAddTodo(name: string) {
    // console.log(name);
    const id = this.todoItems.length + 1;
    const newTodoItem = { id, name, complete: false };
    this.todoItems.push(newTodoItem);
  }

  deleteTodoItem(id: number) {
    const index = this.todoItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.todoItems.splice(index, 1);
    }
  }

  toggleComplete(id: number) {
    const item = this.todoItems.find((item) => item.id === id);
    if (item) {
      item.complete = !item.complete;
    }
  }
}
