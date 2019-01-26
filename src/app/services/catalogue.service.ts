import { Injectable } from '@angular/core';
import { TipoProduto } from '../models/produto-model/TipoProduto';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  private tipoProdutoSelecionado: TipoProduto;

  constructor() { }

  setTipoProdutoSelecionado(tipoProduto: TipoProduto){
    this.tipoProdutoSelecionado = tipoProduto;
  }

  getTipoProdutoSelecionado(){
    return this.tipoProdutoSelecionado;
  }
}
