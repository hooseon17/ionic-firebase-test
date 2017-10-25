import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
//import { FirebaseObjectObservable } from 'angularfire2/database';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class FirebaseProvider {
  
  

  constructor(public afd: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }

  getTokens() {
    return this.afd.list('/tokens/');
  }

  getKey() {
    return this.afd.object('tokens').snapshotChanges().map(action => {
      const data = action.payload.toJSON();
      return data;
    });
  }

  addToken(token) { 
    const promise = this.afd.list('/tokens/').push(token);
    console.log(promise.key);
  }

  removeToken(id) {
    this.afd.list('/tokens/' + id).remove();
  }
}
