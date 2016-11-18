import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Signon page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signon',
  templateUrl: 'signon.html'
})
export class SignonPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SignonPage Page');
  }

}
