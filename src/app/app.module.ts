import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DespreUnghiaNaturalaComponent } from './despre-unghia-naturala/despre-unghia-naturala.component';
import { UstensileFolositeComponent } from './ustensile-folosite/ustensile-folosite.component';
import { FormeUnghiiComponent } from './forme-unghii/forme-unghii.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BolileUnghieiComponent } from './bolile-unghiei/bolile-unghiei.component';
import { ProductsComponent } from './products/products.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DespreUnghiaNaturalaComponent,
    UstensileFolositeComponent,
    FormeUnghiiComponent,
    NotfoundComponent,
    BolileUnghieiComponent,
    ProductsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
