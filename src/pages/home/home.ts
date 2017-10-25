import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  newItem = '';
  tokens: any;
  objects: any;
  items: any[] = [];

  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {
    this.tokens = this.firebaseProvider.getTokens();


    this.tokens.valueChanges().subscribe((data) => {
      this.items = data;
     // console.log(this.items);
    }); 
  }

  addToken() {
    this.firebaseProvider.addToken(this.newItem);
  }

  removeItem(id) {
    console.log("deleting" + id);
    this.firebaseProvider.removeToken(id);
  }

}
