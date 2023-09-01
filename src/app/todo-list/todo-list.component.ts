import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todo: string[] = [];
  task: string = '';

  handleSubmit(): void {
    if (this.task.trim() !== '') {
      this.todo.push(this.task); // Add the new task to the todo array
      this.task = ''; // Clear the input field
    }
  }

  handleDelete(index: number): void {
    this.todo.splice(index, 1); // Remove the task at the specified index
  }
}
