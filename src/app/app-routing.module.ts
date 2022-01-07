import { TurkceComponent } from './components/dersler/turkce/turkce.component';
import { FizikComponent } from './components/dersler/fizik/fizik.component';
import { MatematikComponent } from './components/dersler/matematik/matematik.component';
import { KayituyeComponent } from './components/kayituye/kayituye.component';
import { DerslerComponent } from './components/dersler/dersler.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KayıtlarComponent } from './components/kayıtlar/kayıtlar.component';

const routes: Routes = [

  {path:'', component:HomeComponent},
  {path:'dersler', component:DerslerComponent},
  {path:'uyegirisi', component:KayituyeComponent},
  {path:'matematik', component:MatematikComponent},
  {path:'fizik', component:FizikComponent},
  {path:'turkce', component:TurkceComponent},
  {path:'kayitlar',component:KayıtlarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  


}
