import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController,App } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the EditdrugPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editdrug',
  templateUrl: 'editdrug.html',
})
export class EditdrugPage {
  getType:any
  getName:any
  getAlarm:any
  getTime:any
  getDate:any

  constructor(public app: App,public storage:Storage,public authService: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.getType = navParams.get('typed')
    this.getName = navParams.get('named')
    this.getAlarm = navParams.get('alarmd')
    this.getTime = navParams.get('timed')
    this.getDate = navParams.get('dated')
    }
  ionViewDidLoad(){
    console.log('ionViewDidLoad EditdrugPage');
  }
}

