import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';

import { AppComponent } from './app.component';
import { NavBarComponent } from './NavBar/NavBar.component';
import { FooterComponent } from './Footer/Footer.component';
import { SecondNavBarComponent } from './SecondNavBar/SecondNavBar.component';
import { TopComponent } from './Top/Top.component';
import { AppRoutingModule } from './app-routing.module';
import { CardComponent } from './Top/Cards.component';
import { UserInfoComponent } from './NavBar/User-info.componenent';
import { EditCardComponent } from './Top/EditCard.component';
import { environment } from 'src/environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideDatabase,getDatabase } from '@angular/fire/database';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, FormsModule, AngularFireModule.initializeApp(environment.firebase), provideFirebaseApp(() => initializeApp(environment.firebase)), provideDatabase(() => getDatabase())],
  declarations: [AppComponent, NavBarComponent, FooterComponent, SecondNavBarComponent, TopComponent, CardComponent, UserInfoComponent, EditCardComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
