import { Component, OnInit } from '@angular/core';
import { Store } from '../Store';
import { STORES } from '../mock-stores';

@Component({
  selector: 'app-storelist',
  templateUrl: './storelist.page.html',
  styleUrls: ['./storelist.page.scss'],
})
export class StorelistPage implements OnInit {
  //Get data from store.ts and show to the list
  stores = STORES;
  selectedStore: Store;
  constructor() { }

  ngOnInit() {
  }

}
