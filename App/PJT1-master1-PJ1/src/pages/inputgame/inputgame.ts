import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service';
import { GamedocPage } from '../gamedoc/gamedoc';

/**
 * Generated class for the InputgamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inputgame',
  templateUrl: 'inputgame.html',
})
export class InputgamePage {
  userData = {
    "id_game": "",
    "game_name": "",
    "game_detail": "",
    "game_link": ""
  };
  userDatap = {
    "id_patient": ""
  
  };
  public resposeData:any;

  constructor(public authService: AuthServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputgamePage');
  }
  gotodoctor(){
    this.navCtrl.push(InputgamePage);
}
save(){
  this.authService.PostData(this.userData,"addgamedoc").then((result)=> {
    this.resposeData = result;
    console.log(this.resposeData)
   });
  this.navCtrl.push(GamedocPage);
}

}