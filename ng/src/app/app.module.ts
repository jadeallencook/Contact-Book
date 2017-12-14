import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewContactsComponent } from './pages/view-contacts/view-contacts.component';
import { SingleContactComponent } from './pages/single-contact/single-contact.component';
import { AddContactComponent } from './pages/add-contact/add-contact.component';
import { JsIncludesComponent } from './components/js-includes/js-includes.component';


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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
