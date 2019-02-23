import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { P6Page } from '../p6/p6';
import { P5Page } from '../p5/p5';
import { StorydocPage } from '../storydoc/storydoc';
import { AuthServiceProvider } from '../../providers/auth-service';

/**
 * Generated class for the CreatstoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-creatstory',
  templateUrl: 'creatstory.html',
})
export class CreatstoryPage {
  userData = {
    "id_patient": "",
    "id_story": "",
    "topic": "",
    "detail": "",
    "date" :""
  };
  userDatap = {
    "id_patient": ""
  
  };
  public resposeData:any;

  constructor(public authService: AuthServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatstoryPage');
  }

  save(){
    this.authService.PostData(this.userData,"AddToppic").then((result)=> {
      this.resposeData = result;
      console.log(this.resposeData)
     });
    this.navCtrl.push(StorydocPage);
  }

}
