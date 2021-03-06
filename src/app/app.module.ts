import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { CartProductItemComponent } from './cart/cart-list/cart-product-item/cart-product-item.component';
import { ProductComponent } from './product/product.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CatalogueBestProductsComponent } from './catalogue/catalogue-best-products/catalogue-best-products.component';
import { ProductCarouselComponent } from './catalogue/product-carousel/product-carousel.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CatalogueProductsCategoriesComponent } from './catalogue/catalogue-products-categories/catalogue-products-categories.component';
import { CatalogueCategoriesComponent } from './catalogue/catalogue-categories/catalogue-categories.component';
import { PurchaseCompletedComponent } from './purchase-completed/purchase-completed.component';
import { CompraController } from './controller/compra.controller';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CartComponent,
    CartListComponent,
    CartProductItemComponent,
    ProductComponent, 
    ProductCarouselComponent, 
    CatalogueComponent,
    CatalogueBestProductsComponent,
    CatalogueProductsCategoriesComponent,
    CatalogueCategoriesComponent,
    PurchaseCompletedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
