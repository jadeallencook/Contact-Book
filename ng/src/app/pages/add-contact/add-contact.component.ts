import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})

export class AddContactComponent implements OnInit {

  contact: Contact = new Contact;
  uid: string = '';

  title: string = 'Add';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params) => {
      this.uid = params['uid'];
      if (this.uid) {
        this.title = 'Edit';
        firebase.database().ref('contacts/' + this.uid).once('value', (snapshot) => {
          this.contact = snapshot.val();
        });
      }
    });
  }

  add() {
    // update contact info
    this.contact.owner = firebase.auth().currentUser.email;
    // cache note
    let note: any = '';
    if (!this.contact.notes[0]) note = 'Customer was added ' + new Date().toDateString() + ' by ' + this.contact.owner;
    else note = this.contact.notes[0];
    note = {
      date: new Date().toDateString(),
      msg: note,
      owner: this.contact.owner
    };
    this.contact.notes = [];
    // push contact to firebase
    if (!this.uid) {
      firebase.database().ref().child('contacts').push(this.contact).then((event) => {
        firebase.database().ref().child('contacts/' + event.key + '/notes').push(note).then(() => {
          this.contact = new Contact;
        });
      });
    } else {
      firebase.database().ref('contacts/' + this.uid).once('value', (snapshot) => {
        let tmp = snapshot.val();
        tmp.name = this.contact.name;
        tmp.email = this.contact.email;
        tmp.zipcode = this.contact.zipcode;
        tmp.phone = this.contact.phone;
        tmp.category = this.contact.category;
        firebase.database().ref('contacts/' + this.uid).set(tmp).then(() => {
          this.router.navigateByUrl('/contacts');
        });
      });
    }
  }

  ngOnInit() {
  }

}
