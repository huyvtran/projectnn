import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController,App } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SN1 } from '../sn1/sn1';
import { ShowmePage } from '../showme/showme';
import { AuthServiceProvider } from '../../providers/auth-service';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the InfouserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-infouser',
  templateUrl: 'infouser.html',
})
export class InfouserPage {
  public resposeData:any;
  public data:string;
  public editUser:any;
  public infouser:any;
  public sid:any;
  public x:string = "aaaaa"
  public userData:any ={
    "id_patient": "",
    "id_doctor": "",
    "name_patient": "",
    "gender_patient" :"",
    "weight_patient" :"",
    "height_patient" :"",
    "year_patient" :"",
    "hisdrug_patient" :"",
    "dis_patient" :"",
    "doc_patient" :"",
    "hos_patient" :"",
    "doctel_patient" :"",
    "tel_patient" :""
  };

  userDatap = {
    "id_patient": ""
  
  };

  userDetails = { "user_id": "" };
  constructor(public app: App, private storage: Storage, public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider, public toastCtrl: ToastController) {
    this.storage.get('userData').then((val) => {
      var val = JSON.parse(val);
      this.userDetails.user_id = val;
      this.sid = this.userDetails.user_id;
      this.getAccount();
      this.editAccount();
      this.infouser = navParams.get('userinfo');
      console.log(this.infouser);
      
      
      
    });
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfouserPage');
  }
  gosn1(){
    this.navCtrl.push(SN1);
  }

  openGallery(){
    //const option 
  }
  getAccount() {
    this.userDatap.id_patient = this.sid;
    this.authService.PostData(this.userDatap, "getAccountPatient").then((result) => {
      this.resposeData = result;
      if (this.resposeData.patient) {
        this.data = this.resposeData.patient;
        console.log(this.data)
        
      }
      else {
        console.log(this.resposeData, "not conn");
      }
    }, (err) => {
      console.error(err);
    });
  }

  editAccount() {
     this.userDatap.id_patient = this.sid;
     this.authService.PostData(this.userDatap, "editAccountPatient").then((result) => {
       this.resposeData = result;
       if (this.resposeData.patient) {
         this.data = this.resposeData.patient;
         console.log(this.data)
       }
       else {
         console.log(this.resposeData, "not conn");
       }
       this.navCtrl.push(ShowmePage);
     }, (err) => {
       console.error(err);
     });
   
   }
  
  
}
