import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  @Output() addTodo: EventEmitter<string> = new EventEmitter<string>();
  newTodo: string = '';

  onSubmit() {
    // console.log('TODO ==' + this.newTodo);
    if (this.newTodo.trim() !== '') {
      this.addTodo.emit(this.newTodo);
      this.newTodo = '';
    }
  }
}
