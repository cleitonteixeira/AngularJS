import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { RouterModule } from "@angular/router";

import { HttpClientModule } from "@angular/common/http";
 
import { AppComponent } from './app.component';
import { LoginModule } from './authentication/login.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { FarmModule } from './farms/farm.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    LoginModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    FarmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
