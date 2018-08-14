import { Component, OnInit } from '@angular/core';
import { TodolistService } from './todolist.service';
// import { findLast } from '@angular/compiler/src/directive_resolver';



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
        done: false,
        edit: false
      });
      this.newItem = '';
      this.saveTodoListToStorage();
    } else {
      alert('You shouldn\'t do it, Brooo');
    }
    // console.log(this.todoList);
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
    // console.log(this.todoList);
  }

  saveTodoListToStorage() {
    // console.log(this.todoList);
    this.todoStorage.setItem('todos', JSON.stringify(this.todoList));
    this.checkTheStatusOfItem();
  }

  getTodoListFromStorage() {
    this.todoList = JSON.parse(this.todoStorage.getItem('todos'));
    this.checkTheStatusOfItem();
  }

  clearList() {

    this.todoList = this.todoList.filter(item => !item.done);
    this.saveTodoListToStorage();
  }

  // delete an item

  deleteAnItem(ind) {
    this.todoList.splice(ind, 1);
    this.saveTodoListToStorage();
  }

  showStatus(str) {
    this.itemFilter = str;
  }

  checkTheStatusOfItem() {
    let ch = false;
    for (let i = 0; i < this.todoList.length; i++) {
      if (this.todoList[i].done === true) {
        ch = true;
      }
    }
    return ch;
  }

  changeEdit(item) {
    item.edit = true;
  }

  editItem(event, item) {
    // get value from input
    const descr = event.target.value.trim();
    item.descr = descr;

    // hide edit input field
    item.edit = false;

    // save changes to local storage
    this.saveTodoListToStorage();
  }
}

