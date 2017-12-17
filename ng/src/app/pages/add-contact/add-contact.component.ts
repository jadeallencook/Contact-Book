import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import * as firebase from 'firebase';
import { firestore } from 'firebase';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})

export class AddContactComponent implements OnInit {

  contact: Contact = new Contact;

  constructor() { }

  add() {
    // update contact info
    this.contact.owner = firebase.auth().currentUser.email;
    // cache note
    let note:any = '';
    if (!this.contact.notes[0]) note = 'Customer was added ' + new Date().toDateString() + ' by ' + this.contact.owner;
    else note = this.contact.notes[0];
    this.contact.notes = [];
    // push contact to firebase
    firebase.database().ref().child('contacts').push(this.contact).then((event) => {
      firebase.database().ref().child('contacts/' + event.key + '/notes').push(note).then(() => {
        this.contact = new Contact;
      });
    });
  }

  ngOnInit() {
  }

}
