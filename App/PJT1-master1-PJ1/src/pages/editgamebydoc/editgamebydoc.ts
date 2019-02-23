import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController,App } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service';
import { Storage } from '@ionic/storage';
import { GamedocPage } from '../gamedoc/gamedoc';

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

  userData = {
    "id_game":"",
    "game_name":"",
    "game_detail":"",
    "game_link":""
  };
  public resposeData:any;
  constructor(public app: App,public storage:Storage,public authService: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.getName = navParams.get('named')
    this.getDetail = navParams.get('detaild')
    this.getLink = navParams.get('linkd')

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditgamebydocPage');
  }
  edit(){
    this.authService.PostData(this.userData,"editgame").then((result)=> {
      this.resposeData = result;
      console.log(this.resposeData)
     });
    this.navCtrl.push(GamedocPage);
  }


}
