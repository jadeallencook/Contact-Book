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
        contact.latestNote = contact.notes[Object.keys(contact.notes).reverse()[0]].msg;
        return contact;
      });
    });
  }

  formatPhoneNumber(num) {
    var s2 = ("" + num).replace(/\D/g, '');
    var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
    return (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3];
  }

  ngOnInit() {
  }

}
