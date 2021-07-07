import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { EventComponent } from './Royal Riders/event.component';
import { HomeComponent } from './Royal Riders/home.component';
import { MembComponent } from './Royal Riders/memb.component';
import { NotFoundComponent } from './Royal Riders/notfound.component';
import { RegiComponent } from './Royal Riders/regi.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,NotFoundComponent,MembComponent,RegiComponent,EventComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
