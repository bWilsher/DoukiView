import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FeaturedFilmsComponent } from './featured-films/featured-films.component';
import { ChooseComponent } from './choose/choose.component';
import { WhatsOnComponent } from './whats-on/whats-on.component';
import { FilmDescComponent } from './film-desc/film-desc.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
