import { Component, OnInit, Input, SimpleChanges, SimpleChange } from '@angular/core';
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
  private title:string;

  @Input("tipoCategoria") tipoProduto:TipoProduto;
  @Input("idCategoria") idCategoria;

  constructor(private produtoService: ProdutosServiceService) {
    
   }

  ngOnInit() {
    this.listaProdutosCatetgoria = this.produtoService.getProdutosPorCategoria(this.idCategoria);
    this.listaArrayProdutosCarousel = new Array<Array<Produto>>();
    this.carrregarListaExibicaoCarousel();
  }

  ngOnChanges(changes: SimpleChanges) {
    const idCategoria: SimpleChange = changes.idCategoria;
    this.idCategoria = idCategoria.currentValue;

    this.carrregarListaExibicaoCarousel();
  }

  carrregarListaExibicaoCarousel() {
    console.log("Teste");
    this.title = TipoProduto[this.idCategoria];
    console.log(this.title);
    this.listaArrayProdutosCarousel = new Array<Array<Produto>>();
    this.listaProdutosCatetgoria = this.produtoService.getProdutosPorCategoria(this.idCategoria);

    var numListasCarousel = this.listaProdutosCatetgoria.length / 4;
    var numAnt = 0;
    for(let i = 0; i < numListasCarousel; i++){
      this.listaArrayProdutosCarousel.push(this.listaProdutosCatetgoria.slice(numAnt, numAnt + 4));
      numAnt += 4;
    }
  }

}
