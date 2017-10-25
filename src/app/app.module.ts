import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseProvider } from '../providers/firebase/firebase';

const firebaseConfig = {
      apiKey: "AIzaSyAkRrE1J_pP090UW7AR9V2_bzY5qTembHw",
      authDomain: "ionictest-b783f.firebaseapp.com",
      databaseURL: "https://ionictest-b783f.firebaseio.com",
      projectId: "ionictest-b783f",
      storageBucket: "ionictest-b783f.appspot.com",
      messagingSenderId: "1061014390664"
    };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Firebase,
    FirebaseProvider,
    UniqueDeviceID
  ]
})
export class AppModule {}
