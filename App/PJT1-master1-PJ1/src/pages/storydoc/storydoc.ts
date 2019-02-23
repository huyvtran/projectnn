import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { CreatstoryPage } from '../creatstory/creatstory';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../../providers/auth-service';
import { StorybydocPage } from '../storybydoc/storybydoc';

/**
 * Generated class for the StorydocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-storydoc',
  templateUrl: 'storydoc.html',
})
export class StorydocPage {

  items:any;
  public resposeData:any;
  public data:any;
  userData = {
    "id_story": '',
    "id_doctor": "",
    "date":"", 
    "topic": "",
    "detail": "",
    "status_story":""
  };
  userDatap = {
    "id_doctor": ""
  };
  userDetails = { "user_id": "" };
  public sid:any;

  constructor(public app: App,public storage:Storage,public authService: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
  this.storage.get('userData').then((val) =>{
   var val = JSON.parse(val);
   this.userDetails.user_id = val;
   this.sid = this.userDetails.user_id;
    console.log('ionViewDidLoa  d StorydocPageconStuc');
      this.showStory();
   });
  }
  ionViewWillEnter(){
    console.log('ionViewWillEnter StorydocPage');
    this.showStory();
  }
  read(a1:string,a2:string,id:string){
    this.navCtrl.push(StorybydocPage,{topic:a1,detail:a2,idStory:id})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StorydocPage');
    
  }
  creat(){
    this.navCtrl.push(CreatstoryPage);
  }
  showStory(){
    this.userDatap.id_doctor=this.sid;
    this.authService.PostData(this.userDatap, "gettoppic").then((result)=>{
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
