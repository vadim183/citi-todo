import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/index';

import { TodoService } from '../todo.service';
import { TodoItem } from '../item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  items$: Observable<TodoItem[]>;

  newItem: TodoItem;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.items$ = this.todoService.getItems();
  }

  addItem() {
    this.newItem = {
      isCompleted: false,
      title: ''
    };
  }

  removeItem(item) {
  }

  updateItem(event, item) {
  }

  saveItem() {

  }

  cancelAdd() {
    this.newItem = null;
  }
}
