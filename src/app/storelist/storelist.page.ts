import { Component, OnInit } from '@angular/core';
import { Store } from '../Store';
import { STORES } from '../mock-stores';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-storelist',
  templateUrl: './storelist.page.html',
  styleUrls: ['./storelist.page.scss'],
})
export class StorelistPage implements OnInit {
  //Get data from store.ts and show to the list
  stores : Store[];
  selectedStore: Store;
  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.getStores();
  }

  getStores(): void {
    this.storeService.getStores()
        .subscribe(stores => this.stores = stores);
  }
}
