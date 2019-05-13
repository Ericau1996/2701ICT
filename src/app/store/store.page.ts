import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Store }         from '../store';
import { StoreService }  from '../store.service';
import {Storage} from '@ionic/storage';

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
    private location: Location,
    private storage: Storage
    
  ) { }

  ngOnInit() {
    this.getStore();
  }
  
  getStore(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.storeService.getStore(id)
    .subscribe(store => this.store = store);
  }

  imageFile:any;
  imageSelected(files){
    if (files.length>0){
      alert("imageSelected: "+files[0].name);
    }

    let fileReader = new FileReader();

    fileReader.readAsDataURL(files[0]);

    fileReader.onload=e=>{
      this.imageFile = fileReader.result;
      this.storage.set('avatar', this.imageFile);
    };
  }

}
