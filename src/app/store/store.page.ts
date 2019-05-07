import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Store }         from '../store';
import { StoreService }  from '../store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  store:Store;

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getStore();
  }

  getStore(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.storeService.getStore(id)
    .subscribe(store => this.store = store);
  }
}
