import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  email:string = '';
  password:string = '';

  constructor() {
  }

  login() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
      console.log(firebase.auth().currentUser);
    }).catch((error) => {
      console.log(error);
    });
  }

  create() {
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(() => {
      this.login();
    }).catch((error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
