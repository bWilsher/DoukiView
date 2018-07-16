import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FeaturedFilmsComponent } from './featured-films/featured-films.component';
import { ChooseComponent } from './choose/choose.component';
import { WhatsOnComponent } from './whats-on/whats-on.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FeaturedFilmsComponent,
    ChooseComponent,
    WhatsOnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
