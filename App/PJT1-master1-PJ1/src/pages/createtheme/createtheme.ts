import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { P6Page } from '../p6/p6';
import { StorydocPage } from '../storydoc/storydoc';

import { AuthServiceProvider } from '../../providers/auth-service';
import { P5Page } from '../p5/p5';
import { P4Page } from '../p4/p4';

/**
 * Generated class for the CreatethemePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createtheme',
  templateUrl: 'createtheme.html',
})
export class CreatethemePage {
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
  public resposeData:any;


  constructor(public authService: AuthServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatethemePage');
  }
back(){
  this.navCtrl.push(P6Page);
}
create(){
  this.authService.PostData(this.userData,"addpost").then((result)=> {
    this.resposeData = result;
    console.log(this.resposeData)
   });
  this.navCtrl.push(P6Page);
}
}
