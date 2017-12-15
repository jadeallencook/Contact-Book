import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user:string = 'loading...';
  constructor() {
    this.user = firebase.auth().currentUser.email.replace('@deseretnews.com', '');
  }
  logout() {
    firebase.auth().signOut();
  }
  ngOnInit() {
  }

}
