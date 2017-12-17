import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-view-contacts',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.scss']
})
export class ViewContactsComponent implements OnInit {

  contacts:Array<Contact>;

  constructor() {
    // get all contacts from firebase
    firebase.database().ref('contacts/').on('value', (snapshot) => {
      // convert {} into []
      this.contacts = snapshot.val();
      this.contacts = Object.keys(this.contacts).map((key) => {
        let contact = this.contacts[key];
        contact.uid = key;
        contact.latestNote = contact.notes[Object.keys(contact.notes)[0]];
        return contact;
      });
    });
  }

  ngOnInit() {
  }

}
