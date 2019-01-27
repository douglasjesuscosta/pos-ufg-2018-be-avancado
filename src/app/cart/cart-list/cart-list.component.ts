import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto-model/Produto';
import { CartService } from 'src/app/services/cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  products: Produto[];
  total: number = 0;
  subscription: Subscription;

  constructor(private cartService: CartService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.subscription = this.cartService.productsChanged.subscribe((products: Produto[]) => {
      this.products = products;

      this.total = 0;
      this.products.forEach(p => {
        this.total += p.p_precoAtual * p.p_quantidade;
      });
    });
    this.products = this.cartService.getProdutos();

    this.products.forEach(p => {
      this.total += p.p_precoAtual * p.p_quantidade;
    });
  }

  onDeleteProduct(productId : number) {
    this.cartService.deleteProduct(productId);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onFinish() {
    this.router.navigate(['../compraConcluida'], {relativeTo: this.route});
  }

}
