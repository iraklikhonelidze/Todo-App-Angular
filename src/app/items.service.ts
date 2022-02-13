import { Injectable } from '@angular/core';
import { Items } from './item.model';

@Injectable({ providedIn: 'root' })
export class ItemsService {
  items: Items[] = [
    { description: 'Meet a friend', done: false },
    { description: 'Learn Angular', done: true },
  ];

  private saveItems() {
    localStorage.setItem('todos', JSON.stringify(this.items));
  }

  getItems() {
      const todoItems = localStorage.getItem('todos')
      if(todoItems){
        this.items = JSON.parse(todoItems);

      }
      return this.items;
  }

  addItem(newItemDesc: string) {
    this.items.unshift({ description: newItemDesc, done: false });
    this.saveItems();
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
    this.saveItems();
  }

  finishItem(index: number) {
    this.items[index].done = !this.items[index].done;
    this.saveItems();
  }
}
