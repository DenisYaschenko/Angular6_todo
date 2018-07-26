import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();

  getTodoItems() {
    return this.model.items;
  }

  AddItem(newItem) {
    if (newItem === '') {
      alert('You shouldn\'t do it');
    }  else {
      this.model.items.push(new ToDoItems(newItem, false));
    }
  }
}

export class Model {
  items;

  constructor() {
    this.items = [new ToDoItems('Buy something', false),
    new ToDoItems('Buy flower', false),
    new ToDoItems('Buy beer', false),
    new ToDoItems('Buy whore', false)];
  }
}

export class ToDoItems {
  descr;
  done;

  constructor (descr, done) {
    this.descr = descr;
    this.done = done;
  }
}
