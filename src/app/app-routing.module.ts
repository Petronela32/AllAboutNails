import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BolileUnghieiComponent } from './bolile-unghiei/bolile-unghiei.component';
import { DespreUnghiaNaturalaComponent } from './despre-unghia-naturala/despre-unghia-naturala.component';
import { FormeUnghiiComponent } from './forme-unghii/forme-unghii.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsComponent } from './products/products.component';
import { UstensileFolositeComponent } from './ustensile-folosite/ustensile-folosite.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'despre-unghia-naturala', component: DespreUnghiaNaturalaComponent },
  { path: 'bolile-unghiei', component: BolileUnghieiComponent },
  { path: 'ustensile-folosite', component: UstensileFolositeComponent },
  { path: 'forme-unghii', component: FormeUnghiiComponent },
  { path: 'products', component: ProductsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
