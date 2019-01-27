import { Component, OnInit, Input } from '@angular/core';
import { TipoProduto } from 'src/app/models/produto-model/TipoProduto';
import { ProdutosServiceService } from 'src/app/services/produtos-service.service';
import { Produto } from 'src/app/models/produto-model/Produto';

@Component({
  selector: 'app-catalogue-products-categories',
  templateUrl: './catalogue-products-categories.component.html',
  styleUrls: ['./catalogue-products-categories.component.css']
})
export class CatalogueProductsCategoriesComponent implements OnInit {
  private listaProdutosCatetgoria:Array<Produto>;
  private listaArrayProdutosCarousel:Array<Array<Produto>>;

  @Input("tipoCategoria") tipoProduto:TipoProduto;
  @Input("idCategoria") idCategoria;

  constructor(produtoService:ProdutosServiceService) {
    this.listaProdutosCatetgoria = produtoService.getProdutosPorCategoria(this.tipoProduto);
   }

  ngOnInit() {
    this.carrregarListaExibicaoCarousel();
  }

  carrregarListaExibicaoCarousel() {
    var numListasCarousel = this.listaProdutosCatetgoria.length / 4;
    var numAnt = 0;
    for(let i = 0; i < numListasCarousel; i++){
      this.listaArrayProdutosCarousel.push(this.listaProdutosCatetgoria.slice(numAnt, numAnt + 4));
      numAnt += 4;
    }
  }

}
