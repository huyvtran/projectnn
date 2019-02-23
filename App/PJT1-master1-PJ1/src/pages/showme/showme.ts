import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, App } from 'ionic-angular';
import { InfouserPage } from '../infouser/infouser';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../../providers/auth-service';


/**
 * Generated class for the ShowmePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showme',
  templateUrl: 'showme.html',
})
export class ShowmePage {
  public resposeData: any;
  public data: any;
  public infouser:any;
  public sid: any;
  userData = {
    "id_patient": "",
    "id_doctor": ""
  };
  userDatap = {
    "id_patient": ""
  };
  userDetails = { "user_id": "" };
  constructor(public app: App, private storage: Storage, public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider, public toastCtrl: ToastController) {
    this.storage.get('userdata').then((val) => {
      var val = JSON.parse(val);
      this.userDetails.user_id = val;
      this.sid = this.userDetails.user_id;
      this.getAccount();
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowmePage');
  }
  backhome() {
    this.navCtrl.push(InfouserPage,{userinfo:this.infouser});
  }
  getAccount() {
    this.userDatap.id_patient = this.sid;
    console.log(this.userData);
    this.authService.PostData(this.userDatap, "getAccountPatient").then((result) => {
      this.resposeData = result;
      if (this.resposeData.patient) {
        this.data = this.resposeData.patient;
        this.infouser = this.data

      }
      else {
        console.log(this.resposeData, "not conn");
      }
    }, (err) => {
      console.error(err);
    });
  }
}


