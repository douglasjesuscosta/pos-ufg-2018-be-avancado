import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/bemvindo', pathMatch: 'full' },
  { path: 'bemvindo', component: HomeComponent },
  { path: 'meucarrinho', component: CartComponent},
  { path: 'produto/:id', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}