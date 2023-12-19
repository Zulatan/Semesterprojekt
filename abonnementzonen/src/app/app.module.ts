import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { FirestoreModule } from '@angular/fire/firestore'

import { environment } from 'src/environments/environment';
import { NotificationSettingsModalComponent } from './notification-settings-modal/notification-settings-modal.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AppComponent, NotificationSettingsModalComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, AngularFireModule.initializeApp(environment.firebaseConfig), AngularFireAuthModule, FirestoreModule, ReactiveFormsModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

