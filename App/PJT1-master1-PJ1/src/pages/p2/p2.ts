import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { SN1 } from '../sn1/sn1';
import { ResultsymPage } from '../resultsym/resultsym';
import { AuthServiceProvider } from '../../providers/auth-service';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the P2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-p2',
  templateUrl: 'p2.html',
})
export class P2Page {
  userData = {
    "data_dat":"",
    "one": "",
    "two": "",
    "tree": "",
    "four": "",
    "five": "",
    "six": "",
    "seven": "",
    "id_patient": "id_patient"
  };
  public resposeData:any;
  userDatails={"user_id":""};
 
  constructor(private storage: Storage,public navCtrl: NavController, public navParams: NavParams,public authService:AuthServiceProvider,public toastCtrl:ToastController) {
    this.storage.get('userdata').then((val) => {
      var val = JSON.parse(val);
      this.userDatails.user_id=val;
      this.userData.id_patient= this.userDatails.user_id;
      
    });
  }
  presenToast(msg) {
    let toast = this
      .toastCtrl
      .create({message: msg,duration: 2000});
    toast.present();
  }
  AddActivity(){
    console.log(this.userData)
    this.authService.PostData(this.userData, "addActivity").then((result) =>{
      this.resposeData = result;
      console.log(this.resposeData);
      if(this.resposeData.pattient){
        this.presenToast("เพิ่มข้อมูลเรียบร้อยแล้ว");
      }
      else{
        this.presenToast("เพิ่มข้อมูลไม่ได้");

      }
      }, (err) => {
      
      });
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad P2Page');
  }
  backhomee(){
    this.navCtrl.push(SN1);
  }
  gosu(){
    this.navCtrl.push(ResultsymPage);
  }
  
}
