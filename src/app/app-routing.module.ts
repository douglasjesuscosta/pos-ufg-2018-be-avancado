import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { ProductCarouselComponent } from './catalogue/product-carousel/product-carousel.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { PurchaseCompletedComponent } from './purchase-completed/purchase-completed.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/produtos', pathMatch: 'full' },
  { path: 'bemvindo', component: HomeComponent },
  { path: 'meucarrinho', component: CartComponent},
  { path: 'produto/:id', component: ProductComponent },
  { path: 'produtos', component:CatalogueComponent},
  { path: 'compraConcluida', component: PurchaseCompletedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}