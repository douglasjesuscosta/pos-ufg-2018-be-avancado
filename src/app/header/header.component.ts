import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Subscription } from 'rxjs';
import { Produto } from 'src/app/models/produto-model/Produto';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  qntProdutc: number = 0;
  subscription: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.subscription = this.cartService.productsChanged.subscribe((products: Produto[]) => {
      this.qntProdutc = products.length;
    });
    this.qntProdutc = this.cartService.getProdutos().length;
  }

}
