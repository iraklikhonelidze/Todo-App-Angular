import { Component, OnInit } from '@angular/core';
import { Items } from './item.model';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  items: Items[];

  constructor(private itemsService: ItemsService) {}

  ngOnInit() {
    this.items = this.itemsService.getItems();
  }


}