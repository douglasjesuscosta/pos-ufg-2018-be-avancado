import { Component, OnInit, Input } from '@angular/core';
import { Produto } from 'src/app/models/produto-model/Produto';

@Component({
  selector: 'app-cart-product-item',
  templateUrl: './cart-product-item.component.html',
  styleUrls: ['./cart-product-item.component.css']
})
export class CartProductItemComponent implements OnInit {
  @Input() product: Produto;
  @Input() index: number;

  ngOnInit() {
  }

}
