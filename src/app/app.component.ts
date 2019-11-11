
import { SplashScreen } from '@ionic-native/splash-screen';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TypeRoomPage } from '../pages/type-room/type-room';

import { InsertDormPage } from '../pages/insert-dorm/insert-dorm';
import { LogoutPage } from '../pages/logout/logout';
import { VsroomPage } from '../pages/vsroom/vsroom';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav : Nav;
  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform : Platform, public statusBar : StatusBar, public splashScreen : SplashScreen) {
    this.initializeApp();

    this.pages = [
    
      { title: 'Home', component: HomePage },
      { title: 'ลงชื่อเข้าใช้', component: LoginPage },
      { title: 'ประเภทห้องเช่า', component: TypeRoomPage },
      { title: 'เปรียบเทียบราคาห้อง', component: VsroomPage},
      

    ];
    
    // event.subscribe('username:Login',() =>{
    //   this.pages = [
    //     { title: 'ประเภทห้องเช่า',component: TypeRoomPage },
    //     { title: 'เปรียบเทียบราคาห้อง', component: PriceRoomPage },
    //     { title: 'เพิ่มห้องเช่า', component: InsertDormPage},
    //     { title: 'ออกจากระบบ', component: LogoutPage},

    //   ];
    // });

    // event.subscribe('username:Logout',() =>{
    //   this.pages = [
    //     { title: 'ประเภทห้องเช่า',component: TypeRoomPage },
    //     { title: 'เปรียบเทียบราคาห้อง', component: PriceRoomPage },
    //     { title: 'ลงชื่อเข้าใช้', component: LoginPage },

    //   ];
    // });


    }


    
    initializeApp() {
      this.platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    }
  
    openPage(page) {
      // Reset the content nav to have just this page
      // we wouldn't want the back button to show in this scenario
      this.nav.setRoot(page.component);
    }
}