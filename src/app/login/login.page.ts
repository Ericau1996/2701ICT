import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AccountPage } from '../account/account.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{
  //denfined type of value
  firstname="";
  lastname="";
  email="";
  dob="DD/MM/YYYY";
  constructor(private accountController: ModalController) { }

  ngOnInit() {
  }
  //passing value to account
  async login(){
    const account = await this.accountController.create({
      component: AccountPage,
      componentProps: {
        custom_firstname: this.firstname,
        custom_lastname: this.lastname,
        custom_email: this.email,
        custom_dob: this.dob
      }
    });
    account.present();
  }
}
