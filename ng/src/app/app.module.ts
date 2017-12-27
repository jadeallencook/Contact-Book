// dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import * as firebase from 'firebase';
import { FormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewContactsComponent } from './pages/view-contacts/view-contacts.component';
import { SingleContactComponent } from './pages/single-contact/single-contact.component';
import { AddContactComponent } from './pages/add-contact/add-contact.component';
import { JsIncludesComponent } from './components/js-includes/js-includes.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ProfileComponent } from './pages/profile/profile.component';

// firebase config 
const firebaseConfig = {
  apiKey: "AIzaSyDMDOkWoShlAL5n1wDGXq1WKqj9t6mWUsQ",
  authDomain: "contact-book-demo.firebaseapp.com",
  databaseURL: "https://contact-book-demo.firebaseio.com",
  projectId: "contact-book-demo",
  storageBucket: "",
  messagingSenderId: "932536432038"
};

// routes for ng router
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: '',
    component: HomeComponent
  }, {
    path: 'view/:uid',
    component: SingleContactComponent
  }, {
    path: 'edit/:uid',
    component: AddContactComponent
  }, {
    path: 'favorites',
    component: FavoritesComponent
  }, {
    path: 'profile',
    component: ProfileComponent
  }, {
    path: 'contacts',
    component: ViewContactsComponent
  }, {
    path: 'add',
    component: AddContactComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ViewContactsComponent,
    SingleContactComponent,
    AddContactComponent,
    JsIncludesComponent,
    LoginFormComponent,
    FavoritesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '#/'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  user: any = 'test';
  constructor() {
    // init firebase
    firebase.initializeApp(firebaseConfig);
  }
}
