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
import { BolileUnghieiComponent } from './bolile-unghiei/bolile-unghiei.component';
import { ProductsComponent } from './products/products.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DespreUnghiaNaturalaComponent,
    UstensileFolositeComponent,
    FormeUnghiiComponent,
    BolileUnghieiComponent,
    ProductsComponent,
    NotFoundComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
