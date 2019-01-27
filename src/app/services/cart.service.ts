import { Injectable } from '@angular/core';
import { Produto } from '../models/produto-model/Produto';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productsChanged = new Subject<Produto[]>();

  private produtos: Produto[] = [];

  getProdutos() {
    return this.produtos.slice();
  }

  getProduto(index: number) {
    return this.produtos.find(p => p.p_id == index);
  }

  addProduto(product: Produto) {
    var index = this.produtos.indexOf(product);
    if(index < 0){
      this.produtos.push(product);
    }else{
      this.produtos[index].p_quantidade += 1;
    }
    this.productsChanged.next(this.produtos.slice());
  }

  deleteProduct(id: any) {
    for(var i = 0; i < this.produtos.length; i++) {
      if(this.produtos[i].p_id === id.productId) {
        this.produtos.splice(i, 1);
      }
    }
    this.productsChanged.next(this.produtos.slice());
  }

  emptyCart() {
    this.produtos = [];
    this.productsChanged.next(this.produtos.slice());
  }
}
