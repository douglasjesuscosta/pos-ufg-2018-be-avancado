import { Injectable } from '@angular/core';
import { Produto } from '../produto-model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosServiceService {

  private produtos?: Array<Produto>;
  private carrinho?: Array<Produto>;

  constructor() {
   }

   private inicializarListaProdutos(){
    this.produtos = [
      {},
      {},
      {},
      {},
      {},
      {},
      {}
    ]
   }
}
