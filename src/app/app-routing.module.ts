import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BolileUnghieiComponent } from './bolile-unghiei/bolile-unghiei.component';
import { DespreUnghiaNaturalaComponent } from './despre-unghia-naturala/despre-unghia-naturala.component';
import { FormeUnghiiComponent } from './forme-unghii/forme-unghii.component';
import { HomeComponent } from './home/home.component';
import { UstensileFolositeComponent } from './ustensile-folosite/ustensile-folosite.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'despre-unghia-naturala', component: DespreUnghiaNaturalaComponent },
  { path: 'bolile-unghiei', component: BolileUnghieiComponent },
  { path: 'ustensile-folosite', component: UstensileFolositeComponent },
  { path: 'forme-unghii', component: FormeUnghiiComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'cart', component: CartComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
