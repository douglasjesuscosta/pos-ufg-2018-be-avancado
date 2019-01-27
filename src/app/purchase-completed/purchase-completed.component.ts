import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Produto } from 'src/app/models/produto-model/Produto';
import { CompraService } from '../services/compra.service';
import { CompraController } from '../controller/compra.controller';

@Component({
  selector: 'app-purchase-completed',
  templateUrl: './purchase-completed.component.html',
  styleUrls: ['./purchase-completed.component.css']
})
export class PurchaseCompletedComponent implements OnInit {
  productsBought: Produto[];
  products: Produto[];
  total: number = 0;

  constructor(private cartService: CartService, private compraController:CompraController) { }

  ngOnInit() {
    this.products = this.cartService.getProdutos();
    this.productsBought = [...this.products];

    this.productsBought.forEach(p => {
      this.total += p.p_precoAtual * p.p_quantidade;
    });

    this.compraController.persistirCompra(this.productsBought, this.total);
    this.cartService.emptyCart();
  }

}
