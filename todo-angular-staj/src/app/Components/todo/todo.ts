// // import { Component } from '@angular/core';
// // import { CommonModule } from '@angular/common';
// // import { FormsModule } from '@angular/forms';
// // import { Todo } from '../../Interfaces/todo.interface';

// // @Component({
// //   selector: 'app-todo',
// //   standalone: true,
// //   imports: [CommonModule, FormsModule],
// //   templateUrl: './todo.html',
// //   styleUrls: ['./todo.css']
// // })
// // export class TodoComponent {
// //   todos: Todo[] = [];
// //   newTodo: string = '';

// //   addTodo() {
// //     if (this.newTodo.trim() === '') return;

// //     this.todos.push({
// //       id: Date.now(),
// //       title: this.newTodo,
// //       completed: false
// //     });

// //     this.newTodo = '';
// //   }

// //   toggleTodo(todo: Todo) {
// //     todo.completed = !todo.completed;
// //   }

// //   deleteTodo(id: number) {
// //     this.todos = this.todos.filter(todo => todo.id !== id);
// //   }
// //   constructor() {
// //   const savedTodos = localStorage.getItem('todos');
// //   if (savedTodos) {
// //     this.todos = JSON.parse(savedTodos);
// //   }
// // }
// // saveToLocalStorage() {
// //   localStorage.setItem('todos', JSON.stringify(this.todos));
// // }

// // }

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { Todo } from '../../Interfaces/todo.interface';

// @Component({
//   selector: 'app-todo',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './todo.html',
//   styleUrls: ['./todo.css']
// })
// export class TodoComponent {

//   todos: Todo[] = [];
//   newTodo: string = '';

//   constructor() {
//     const savedTodos = localStorage.getItem('todos');
//     if (savedTodos) {
//       this.todos = JSON.parse(savedTodos);
//     }
//   }

//   saveToLocalStorage() {
//     localStorage.setItem('todos', JSON.stringify(this.todos));
//   }

//   addTodo() {
//     if (this.newTodo.trim() === '') return;

//     this.todos.push({
//       id: Date.now(),
//       title: this.newTodo,
//       completed: false
//     });

//     this.newTodo = '';
//     this.saveToLocalStorage();
//   }

//   toggleTodo(todo: Todo) {
//     todo.completed = !todo.completed;
//     this.saveToLocalStorage();
//   }

//   deleteTodo(id: number) {
//     this.todos = this.todos.filter(t => t.id !== id);
//     this.saveToLocalStorage();
//   }
  
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Interfaces/todo.interface';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.html',
  styleUrls: ['./todo.css']
})
export class TodoComponent {

  todos: Todo[] = [];
  newTodo: string = '';

  constructor() {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos);
    }
  }

  saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo() {
    if (this.newTodo.trim() === '') return;

    this.todos.push({
      id: Date.now(),
      title: this.newTodo,
      completed: false,
      editing: false
    });

    this.newTodo = '';
    this.saveToLocalStorage();
  }

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
    this.saveToLocalStorage();
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
    this.saveToLocalStorage();
  }

  editTodo(todo: Todo) {
    todo.editing = true;
  }

  saveEdit(todo: Todo) {
    todo.editing = false;
    this.saveToLocalStorage();
  }

}
