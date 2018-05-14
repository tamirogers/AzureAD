import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AppRoutes } from './app.routing';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as c from './';
import { Http, HttpModule } from '@angular/http';
import { Adal5Service, Adal5HTTPService } from 'adal-angular5';
import { AuthenticationGuard } from './common/guards/authentication-guard';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    AppRoutes,
    FormsModule,
    BrowserAnimationsModule
  ],
  declarations: [
    c.AppComponent,
    c.MainComponent,
    c.HomeComponent,
    c.LoginComponent,
    c.LogoutComponent,
    AboutComponent
  ],
  providers: [
    Adal5Service,
    {
        provide: Adal5HTTPService,
        useFactory: Adal5HTTPService.factory,
        deps: [Http, Adal5Service]
    },
    AuthenticationGuard,
    DataService
  ],
  bootstrap: [c.AppComponent]
})
export class AppModule { }
