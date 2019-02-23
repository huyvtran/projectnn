import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the P5detailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-p5detail',
  templateUrl: 'p5detail.html',
})
export class P5detailPage {
  getTopic:any
  getDetail:any


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getTopic = navParams.get('topic')
    this.getDetail = navParams.get('detail')
    console.log(this.getTopic);
    console.log(this.getDetail);
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad P5detailPage');
  }

}
