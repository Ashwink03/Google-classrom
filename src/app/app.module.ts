import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './NavBar/NavBar.component';
import { FooterComponent } from './Footer/Footer.component';
import { SecondNavBarComponent } from './SecondNavBar/SecondNavBar.component';
import { TopComponent } from './Top/Top.component';
import { AppRoutingModule } from './app-routing.module';
import { CardComponent } from './Top/Cards.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, NavBarComponent, FooterComponent, SecondNavBarComponent, TopComponent, CardComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
