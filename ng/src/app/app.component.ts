import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user:any;
  constructor() {
    firebase.auth().onAuthStateChanged(() => {
      this.user = firebase.auth().currentUser;
    });
  }
}
