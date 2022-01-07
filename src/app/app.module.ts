import { RouterModule } from '@angular/router';
import { environment } from './../environments/environment.prod';
import { DataService } from './services/data.service';
import { TurkceComponent } from './components/dersler/turkce/turkce.component';
import { FizikComponent } from './components/dersler/fizik/fizik.component';
import { MatematikComponent } from './components/dersler/matematik/matematik.component';
import { KayituyeComponent } from './components/kayituye/kayituye.component';
import { DerslerComponent } from './components/dersler/dersler.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KayıtlarComponent } from './components/kayıtlar/kayıtlar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DerslerComponent,
    KayituyeComponent,
    MatematikComponent,
    FizikComponent,
    TurkceComponent,
    KayıtlarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
