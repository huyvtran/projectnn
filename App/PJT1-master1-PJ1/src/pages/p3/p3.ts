import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SN1 } from '../sn1/sn1';
import { AuthServiceProvider } from '../../providers/auth-service';
import { ShowdrugPage } from '../showdrug/showdrug';
/**
 * Generated class for the P3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-p3',
  templateUrl: 'p3.html',
})
export class P3Page {
  userData = {
    "id_drug": "",
    "drug_type": "",
    "drug_name": "",
    "drug_alarm": "",
    "drug_time": "",
    "drug_date": ""
    
    
  };
  userDatap = {
    "id_patient": "",
    "id_doctor": ""
  };
  public resposeData:any;

  constructor(public authService: AuthServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad P3Page');
  }
  backhomee(){
    this.navCtrl.push(SN1);
  }
  savee(){
    this.authService.PostData(this.userData,"adddrug").then((result)=> {
      this.resposeData = result;
      console.log(this.resposeData)
     });
    this.navCtrl.push(ShowdrugPage);
  }
}
