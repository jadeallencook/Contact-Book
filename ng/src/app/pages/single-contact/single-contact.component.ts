import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Contact } from '../../models/contact';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.scss']
})
export class SingleContactComponent implements OnInit {

  contact: any = new Contact();
  note: string = '';
  uid: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.uid = params['uid'];
      firebase.database().ref('contacts/' + this.uid).on('value', (snapshot) => {
        const contact = snapshot.val();
        this.contact.name = contact.name;
        this.contact.email = contact.email;
        this.contact.zipcode = contact.zipcode;
        this.contact.category = contact.category;
        this.contact.phone = this.formatPhoneNumber(contact.phone);
        this.contact.notes = Object.keys(contact.notes).map((key) => {
          return contact.notes[key];
        });
      });
    });
  }

  addNote() {
    firebase.database().ref('contacts/' + this.uid + '/notes').push({
      msg: this.note,
      owner: firebase.auth().currentUser.email,
      date: new Date().toDateString()
    }).then(() => {
      this.note = '';
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
