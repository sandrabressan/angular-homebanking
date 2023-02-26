import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerPg01Component } from './banner-pg01/banner-pg01.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerPg01Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
