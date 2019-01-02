import { Component, OnInit } from '@angular/core';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  items;

  newItem;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.items = this.todoService.getItems();
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
