import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  username="";
  update:any;
  notifications:any;
  dateTime:any;
  constructor(private router: Router, private storage: Storage){
    this.storage.get("username").then(val => {
      if (val == null){
        this.username = "Eric";
      } else{
        this.username = val;
      }
    });
    this.storage.get("update").then(valTog => {
        this.update = valTog;
    });
    this.storage.get("notifications").then(valPush => {
      this.notifications = valPush;
    });
    this.storage.get("dateTime").then(valTime => {
      this.dateTime = valTime;
    });
  }
  save(){
    console.log('save working');
    this.storage.set("username", this.username);
    console.log('save username', this.username);
    
    this.storage.set("update", this.update);
    console.log('Update status:', this.update);

    this.storage.set("notifications", this.notifications);
    console.log('Push status:', this.notifications);

    this.storage.set("dateTime", this.dateTime);
    console.log('Date:', this.dateTime);
  }
  async ngOnInit(){
    this.username = await this .storage.get("username");
    if (this.username == null) this.username = "";
  }
}
