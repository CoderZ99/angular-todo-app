import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() item: any;
  @Output() complete: EventEmitter<number> = new EventEmitter<number>();
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  onToggleComplete() {
    this.complete.emit(this.item.id);
  }

  onDelete() {
    this.delete.emit(this.item.id);
  }
}
