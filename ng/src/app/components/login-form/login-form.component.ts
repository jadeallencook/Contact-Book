import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Profile } from '../../models/profile'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  email:string = '';
  password:string = '';
  error:string = '';

  constructor() {
  }

  login() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch((msg) => {
      msg = msg.message;
      this.error = msg;
    });
  }

  create() {
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(() => {
      let profile = new Profile();
      profile.email = firebase.auth().currentUser.email;
      profile.uid = firebase.auth().currentUser.uid;
      firebase.database().ref('profiles/' + profile.uid).set(profile);
    }).catch((msg) => {
      msg = msg.message;
      this.error = msg;
    });
  }

  ngOnInit() {
  }

}
