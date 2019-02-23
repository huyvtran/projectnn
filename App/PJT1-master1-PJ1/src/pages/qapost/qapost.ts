import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { CreatethemePage } from '../createtheme/createtheme';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../../providers/auth-service';

/**
 * Generated class for the QapostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qapost',
  templateUrl: 'qapost.html',
})
export class QapostPage {
  getPost_Topic:any
  getPost_Detail:any 
  getIdPost:any
  userData = {
    "id_comment": "",
    "id_doctor": "",
    "id_patient": "",
    "comment_detail": "",
    "date":"",
    "date_comment" :"",
    "id_post":""
  };
  userDatap = {
    "id_patient": "",
    "id_doctor": "",
    "id_comment":"",
    "id_post":""
  };
  public resposeData:any;
  userDetails = { "user_id": "" };
  public sid:any;
  public data:any;
  items:any;

  
  constructor(public app: App,public storage:Storage,public authService: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
   
    this.getPost_Topic = navParams.get('post_topic')
    this.getPost_Detail = navParams.get('post_detail')
    this.getIdPost = navParams.get('idPost')
    console.log(this.getPost_Topic);
    console.log(this.getPost_Detail);
    console.log(this.getIdPost);
    
    this.userData.id_post = this.getIdPost
    this.userDatap.id_post = this.getIdPost
    this.storage.get('userData').then((val) =>{
      var val = JSON.parse(val);
      this.userDetails.user_id = val;
      this.sid = this.userDetails.user_id;
       console.log('ionViewDidLoa  d QapostPageconStuc');
         this.getpost();
      });
     }
   
  
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad QapostPage');
  }
  create(){
    this.authService.PostData(this.userData, "AddComment").then((result)=> {
      this.resposeData = result;
      console.log(this.resposeData)
     });
    this.navCtrl.push(QapostPage);
  }
  getpost(){
    this.userDatap.id_doctor=this.sid;
    this.authService.PostData(this.userData, "getComment").then((result)=>{
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

