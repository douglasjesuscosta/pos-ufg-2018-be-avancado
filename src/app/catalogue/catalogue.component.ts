import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';
import { TipoProduto } from '../models/produto-model/TipoProduto';
import { Produto } from '../models/produto-model/Produto';
import { ProdutosServiceService } from '../services/produtos-service.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  private  tipoProdutoSelecionado: TipoProduto;
  private exibirComponentCategoria: boolean;

  constructor(private catalogoService: CatalogueService, private produtosService:ProdutosServiceService) { }

  ngOnInit() {
    this.tipoProdutoSelecionado = this.catalogoService.getTipoProdutoSelecionado();
    this.avaliarExibicaoComponent();
  }

  avaliarExibicaoComponent(){
    this.exibirComponentCategoria = this.tipoProdutoSelecionado == null ? false : true;
  }

  onCategoryClick(categoryNumber){
    this.exibirComponentCategoria = true;
    this.catalogoService.setTipoProdutoSelecionado(categoryNumber);
  }

}
