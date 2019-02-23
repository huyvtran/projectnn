import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../../providers/auth-service';
import { P4Page } from '../p4/p4';
import { EditdatPage } from '../editdat/editdat';

/**
 * Generated class for the ShowdocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showdoc',
  templateUrl: 'showdoc.html',
})
export class ShowdocPage {
  items:any;
  public resposeData:any;
  public data:any;
  userData = {
    "id_datdoc": '',
    "name_hospital": "",
    "name_docter":"", 
    "dat_date": "",
    "dat_time": ""

  };
  userDatap = {
    "id_patient": "",
    "id_doctor": ""
};
  userDetails = { "user_id": "" };
  public sid:any;

  constructor(public app: App,public storage:Storage,public authService: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.storage.get('userData').then((val) =>{
     var val = JSON.parse(val);
     this.userDetails.user_id = val;
     this.sid = this.userDetails.user_id;
      console.log('ionViewDidLoa  d ShowdocPageconStuc');
        this.showdoc();
     });
    }
    ionViewWillEnter(){
      console.log('ionViewWillEnter ShowdocPage');
      this.showdoc();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowdocPage');
  }
  gotop4(){
    this.navCtrl.push(P4Page);
  }
  read(namehospital:string,namedoc:string,date:string,time:string){
    this.navCtrl.push(EditdatPage,{namehospitald:namehospital,namedocd:namedoc,dated:date,timed:time,})
  }
  showdoc(){
    this.userDatap.id_patient=this.sid;
    this.authService.PostData(this.userDatap, "getdatdoc").then((result)=>{
      this.resposeData = result;
      console.log(result)
      if (this.resposeData.pattient) {
       this.data = this.resposeData.pattient; 
        this.items =this.data;
      }
     else {
        console.log(this.resposeData, "not conn");
     }
    }, (err) => {
      console.error(err);
    });
  }
}
