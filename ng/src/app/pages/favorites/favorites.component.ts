import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favorites: Array<{}> = [];

  constructor() {
    firebase.database().ref('profiles/' + firebase.auth().currentUser.uid + '/favorites').on('value', (snapshot) => {
      this.favorites = [];
      if (snapshot.val()) {
        snapshot.val().map((key) => {
          firebase.database().ref('contacts/' + key).once('value').then((contact) => {
            contact = contact.val();
            let notes = Object.keys(contact.notes);
            contact.lastNote = contact.notes[notes[notes.length - 1]].msg;
            contact.uid = key;
            this.favorites.push(contact);
          });
        });
      }
    });
  }

  removeFromFavorites(uid) {
    const favRef = 'profiles/' + firebase.auth().currentUser.uid + '/favorites';
    firebase.database().ref(favRef).once('value').then((snapshot) => {
      let favorites = snapshot.val();
      favorites.splice(favorites.indexOf(uid), 1);
      firebase.database().ref(favRef).set(favorites);
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
