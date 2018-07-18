import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FeaturedFilmsComponent } from './featured-films/featured-films.component';
import { ChooseComponent } from './choose/choose.component';
import { WhatsOnComponent } from './whats-on/whats-on.component';
import { FilmDescComponent } from './film-desc/film-desc.component';
import {FilmService} from './Films.service';
import {Http} from "@angular/http";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FeaturedFilmsComponent,
    ChooseComponent,
    WhatsOnComponent,
    FilmDescComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClient, FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
