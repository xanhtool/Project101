import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { routing,appRoutingProviders }  from './app.routing';

import { AppComponent } from './app.component';
import {navBarComponent} from './components/navbar.component';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';
import {HomeComponent} from './components/pages/home/home.component';
import {AboutComponent} from './components/pages/about/about.component';
import {PageNotFoundComponent} from './components/pages/pagenotfound/pagenotfound.component';
import {ContactComponent} from './components/pages/contact/contact.component';

@NgModule({
  imports: [
    BrowserModule,FormsModule,routing
   ],
  declarations: [
    AppComponent,navBarComponent,JumbotronComponent, HomeComponent, AboutComponent, PageNotFoundComponent, ContactComponent
   ],
   providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
