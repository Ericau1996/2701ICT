import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  firstname=null;
  lastname=null;
  email=null;
  dob=null;
  constructor(private NavParams: NavParams, private accountController: ModalController) { }

  ngOnInit() {
    this.firstname = this.NavParams.get('custom_firstname');
    this.lastname = this.NavParams.get('custom_lastname');
    this.email = this.NavParams.get('custom_email');
    this.dob = this.NavParams.get('custom_dob');
  }

  closeModal(){
    this.accountController.dismiss();
  }

}
