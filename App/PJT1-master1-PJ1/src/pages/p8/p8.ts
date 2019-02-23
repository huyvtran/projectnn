import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the P8Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-p8',
  templateUrl: 'p8.html',
})
export class P8Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private callNumber: CallNumber) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad P8Page');
  }
  tel1() {
    this.callNumber.callNumber("0933203484", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

  tel2() {
  this.callNumber.callNumber("1669", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
}
}
