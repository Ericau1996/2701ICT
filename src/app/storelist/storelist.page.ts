import { Component, OnInit } from '@angular/core';
import { Store } from '../Store';
import { STORES } from '../mock-stores';

@Component({
  selector: 'app-storelist',
  templateUrl: './storelist.page.html',
  styleUrls: ['./storelist.page.scss'],
})
export class StorelistPage implements OnInit {
  stores = STORES;
  selectedStore: Store;
  constructor() { }

  ngOnInit() {
  }

}
