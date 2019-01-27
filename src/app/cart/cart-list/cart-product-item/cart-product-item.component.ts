import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from 'src/app/models/produto-model/Produto';

@Component({
  selector: 'app-cart-product-item',
  templateUrl: './cart-product-item.component.html',
  styleUrls: ['./cart-product-item.component.css']
})
export class CartProductItemComponent implements OnInit {
  @Input() product: Produto;
  @Input() index: number;

  @Output() productDeleted = new EventEmitter<{productId: number}>();

  ngOnInit() {
  }

  deleteProductCart(productId) {
    this.productDeleted.emit({productId: productId});
  }

  update(qnt: number, id: number) {
    if(qnt === 0) {
      this.deleteProductCart(id);
    }
  }

}
