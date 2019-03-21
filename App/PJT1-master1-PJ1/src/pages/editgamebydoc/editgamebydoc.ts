import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController,App } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service';
import { Storage } from '@ionic/storage';
import { GamedocPage } from '../gamedoc/gamedoc';
import { ShowmePage } from '../showme/showme';

/**
 * Generated class for the EditgamebydocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editgamebydoc',
  templateUrl: 'editgamebydoc.html',
})
export class EditgamebydocPage {
  getName:any
  getDetail:any
  getLink:any
  public sid:any;
  public data:string;

  public userData:any ={
    "id_game":"",
    "game_name":"",
    "game_detail":"",
    "game_link":""
  };
  userDatap = {
    "id_docter": ""
  
  };
  userDetails = { "user_id": "" };
  public resposeData:any;
  constructor(public app: App, private storage: Storage, public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider, public toastCtrl: ToastController) {
    this.storage.get('userData').then((val) => {
        var val = JSON.parse(val);
        this.userDetails.user_id = val;
        this.sid = this.userDetails.user_id;
        this.edit();
      });   
    this.getName = navParams.get('named')
    this.getDetail = navParams.get('detaild')
    this.getLink = navParams.get('linkd')

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditgamebydocPage');
  }
  edit(){
    this.userDatap.id_docter = this.sid;
    this.authService.PostData(this.userDatap, "editgame").then((result) => {
      this.resposeData = result;
      if (this.resposeData.docter) {
        this.data = this.resposeData.patient;
        console.log(this.data)
      }
      else {
        console.log(this.resposeData, "not conn");
      }
      this.navCtrl.push(GamedocPage);
    }, (err) => {
      console.error(err);
    });
  
  }


}
