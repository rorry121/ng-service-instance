import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ShareModule } from '../share/share.module'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  imports:      [ 
    BrowserModule, FormsModule, ShareModule, AppRoutingModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
