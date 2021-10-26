import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './NavBar/NavBar.component';
import { FooterComponent } from './Footer/Footer.component';
import { SecondNavBarComponent } from './SecondNavBar/SecondNavBar.component';
import { TopComponent } from './Top/Top.component';
import { AppRoutingModule } from './app-routing.module';
import { CardComponent } from './Top/Cards.component';
import { UserInfoComponent } from './NavBar/User-info.componenent';
import { EditCardComponent } from './Top/EditCard.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, FormsModule],
  declarations: [AppComponent, NavBarComponent, FooterComponent, SecondNavBarComponent, TopComponent, CardComponent, UserInfoComponent, EditCardComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
