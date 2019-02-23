import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { SN1 } from '../sn1/sn1';
import { CreatethemePage } from '../createtheme/createtheme';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../../providers/auth-service';
import { QapostPage } from '../qapost/qapost';

/**
 * Generated class for the P6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-p6',
  templateUrl: 'p6.html',
})
export class P6Page {

  ionViewDidLoad() {
    console.log('ionViewDidLoad P6Page');
  }
  items:any;
  public resposeData:any;
  public data:any;
  userData = {
      "id_patient": "",
      "id_doctor": "",
      "id_post": "",
      "post_topic": "",
      "post_detail": "",
      "post_status": "",
      "date" :""
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
      console.log('ionViewDidLoa  d P6PageconStuc');
        this.showPost();
     });
    }
    ionViewWillEnter(){
      console.log('ionViewWillEnter P6Page');
      this.showPost();
    }
    read(idpost:number,a1:string,a2:string){
      this.navCtrl.push(QapostPage,{idPost:idpost,post_topic:a1,post_detail:a2})
    }
    showPost(){
      this.userDatap.id_doctor=this.sid;
      this.authService.PostData(this.userDatap, "getpost").then((result)=>{
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
  

  
  backhomeee(){
    this.navCtrl.push(SN1);
  }
  create(){
    this.navCtrl.push(CreatethemePage);
  }

  qa(){
    this.navCtrl.push(QapostPage);
  }
}
