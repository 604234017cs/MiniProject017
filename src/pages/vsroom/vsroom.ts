import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VsroomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vsroom',
  templateUrl: 'vsroom.html',
})
export class VsroomPage {
  [x: string]: any;
  keyapi: any;
  value: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VsroomPage');
    this.keyapi.loadrooms().subscride(data=>{
       this.value = data;
    });
  }

  getroomview(){
    if(this.result.room1 != ""){
      this.keyapi.showrooom1(this.result.room1).subscride(data=>{ 
        this.showroom1 = data;
        console.log(this.showroom1);
      });
    }else if(this.result.room2 !=""){
      this.keyapi.showroom(this.result.room2).subscride(data=>{
        this.showroom2 = data;
        console.log(this.showroom2);
      });
    }
  }

}
