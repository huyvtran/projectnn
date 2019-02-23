import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SN1 } from '../sn1/sn1';
import { AuthServiceProvider } from '../../providers/auth-service';

/**
 * Generated class for the P4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-p4',
  templateUrl: 'p4.html',
})
export class P4Page {
  userData = {
    "id_datdoc": "",
    "name_hospital": "",
    "name_docter": "",
    "dat_date": "",
    "dat_time": ""
    
    
  };
  userDatap = {
    "id_patient": "",
    "id_doctor": ""
  };
  public resposeData:any;

  constructor(public authService: AuthServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad P4Page');
  }
  backhomee(){
    this.navCtrl.push(SN1);
  }
  create(){
    this.authService.PostData(this.userData,"adddatdoc").then((result)=> {
      this.resposeData = result;
      console.log(this.resposeData)
     });
    this.navCtrl.push(P4Page);
  }
  
}
