import { Component, OnInit } from '@angular/core';
import { TodolistService } from './todolist.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodolistService]
})
export class AppComponent implements OnInit {
  todoList = [];
  newItem = '';
  todoStorage = window.localStorage;
  done: boolean;
  itemFilter = 'All';

  ngOnInit() {
    this.getTodoListFromStorage();
  }

// Add an item

  addItem() {
    // if (this.todoList == null) { create an empty array}
    this.todoList = this.todoList || [];
    // console.log(this.newItem);
    if (this.newItem) {
        this.todoList.push({
        descr: this.newItem,
        done: false
      });
      this.newItem = '';
      // save to localstorage
      this.saveTodoListToStorage();
    } else {
      alert('You shouldn\'t do it, Brooo');
    }
    console.log(this.todoList);
  }

  // change the status of item

  dones(item) {
    // console.log(item.done);
    if (!item.done) {
      item.done = true;
    } else {
      item.done = false;
    }
    this.saveTodoListToStorage();
    console.log(this.todoList);
  }

  saveTodoListToStorage() {
    // console.log(this.todoList);
    this.todoStorage.setItem('todos', JSON.stringify(this.todoList));
  }

  getTodoListFromStorage() {
    this.todoList = JSON.parse(this.todoStorage.getItem('todos'));
  }

  // delete the whole list

  clearList() {
    this.todoList = [];
    this.saveTodoListToStorage();
  }

  // delete an item

  deleteAnItem(ind) {
    this.todoList.splice(ind, 1);
    this.saveTodoListToStorage();
    console.log(this.todoList);
  }

  showStatus(str) {
    this.itemFilter = str;
}
}

