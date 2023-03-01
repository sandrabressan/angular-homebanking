import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule} from '@angular/material/list'; 
import { MatButtonModule} from '@angular/material/button'; 

import { AppComponent } from './app.component';
import { BannerPg01Component } from './home/banner-pg01/banner-pg01.component';
import { DestaquesPg01Component } from './home/destaques-pg01/destaques-pg01.component';
import { RodapePg01Component } from './home/rodape-pg01/rodape-pg01.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContaComponent } from './conta/conta.component';
import { ContaService } from './conta.service';
import { LogService } from './shared/log.service';
import { LogPublishersService } from "./shared/log-publishers.service";

@NgModule({
  declarations: [
    AppComponent,
    BannerPg01Component,
    DestaquesPg01Component,
    RodapePg01Component,
    HomeComponent,
    LoginComponent,
    ContaComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [ContaService, LogService, LogPublishersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
