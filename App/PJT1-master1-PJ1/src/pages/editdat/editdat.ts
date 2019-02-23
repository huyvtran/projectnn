import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController,App } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the EditdatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editdat',
  templateUrl: 'editdat.html',
})
export class EditdatPage {
  getNamehospital:any
  getNamedoc:any
  getDate:any
  getTime:any
  

  constructor(public app: App,public storage:Storage,public authService: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.getNamehospital = navParams.get('namehospitald')
    this.getNamedoc = navParams.get('namedocd')
    this.getDate= navParams.get('dated')
    this.getTime = navParams.get('timed')
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditdatPage');
  }

}
