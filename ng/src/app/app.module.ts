import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewContactsComponent } from './pages/view-contacts/view-contacts.component';
import { SingleContactComponent } from './pages/single-contact/single-contact.component';
import { AddContactComponent } from './pages/add-contact/add-contact.component';
import { JsIncludesComponent } from './components/js-includes/js-includes.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: '*',
    component: HomeComponent
  }, {
    path: 'profile',
    component: SingleContactComponent
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
    JsIncludesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '#/'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
