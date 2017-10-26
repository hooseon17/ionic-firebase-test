import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Firebase } from '@ionic-native/firebase';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';

import { FirebaseProvider } from '../providers/firebase/firebase';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  uuid: any;

  

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public firebase: Firebase, public firebaseProvider: FirebaseProvider, public uniqueDeviceID: UniqueDeviceID) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.uniqueDeviceID.get().then((uuid: any) => {
        this.uuid = uuid;
      }).catch((error: any) => console.log(error)).then(() => {
        this.firebase.getToken().then((token) => {
          console.log(`The token is ${token}`);
          this.firebaseProvider.addToken({'token': token, 'uuid': this.uuid});
        }) // save the token server-side and use it to push notifications to this device
      .catch(error => console.error('Error getting token', error));
      });

      console.log('subscribing to emergency ... ');
      
      this.firebase.subscribe('emergency').then(res => {
        console.log('subscribed to emergency!');
        alert('subscribed to emergency!');
      }, err => {
        console.log(err);
      });
      
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
