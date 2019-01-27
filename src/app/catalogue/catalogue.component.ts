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

  private  idCategoria: number;
  private exibirComponentCategoria: boolean;

  constructor(private catalogoService: CatalogueService, private produtosService:ProdutosServiceService) { }

  ngOnInit() {
    this.idCategoria = this.catalogoService.getTipoProdutoSelecionado();
    this.avaliarExibicaoComponent();
  }

  avaliarExibicaoComponent(){
    this.exibirComponentCategoria = this.idCategoria == null ? false : true;
  }

  onCategoryClick(idCategoria){
    this.exibirComponentCategoria = true;
    this.idCategoria = idCategoria;
    this.catalogoService.setTipoProdutoSelecionado(idCategoria);
  }

}
