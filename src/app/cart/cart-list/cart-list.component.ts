import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto-model/Produto';
import { CartService } from 'src/app/services/cart.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  products: Produto[];

  constructor(private cartService: CartService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.products = this.cartService.getProdutos();
    console.log(this.products);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onFinish() {
      console.log('concluir');
  }

}
