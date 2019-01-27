import { Component, OnInit } from '@angular/core';
import { ProdutosServiceService } from 'src/app/services/produtos-service.service';
import { Produto } from 'src/app/models/produto-model/Produto';
import { TipoProduto } from 'src/app/models/produto-model/TipoProduto';

@Component({
  selector: 'app-catalogue-best-products',
  templateUrl: './catalogue-best-products.component.html',
  styleUrls: ['./catalogue-best-products.component.css']
})
export class CatalogueBestProductsComponent implements OnInit {

  private produtosMaisVendidosLoja:Array<Produto>;
  private produtosMaisVendidosEletroDomesticos:Array<Produto>;
  private produtosMaisVendidosInformatica:Array<Produto>;
  private produtosMaisVendidosMoveis:Array<Produto>;
  private produtosMaisVendidosTelefonesCelulares:Array<Produto>;
  private produtosMaisVendidosUtilidadesDomestricas:Array<Produto>;
  private produtosMaisVendidosEsporte:Array<Produto>;
  private produtosMaisVendidosTvVideo:Array<Produto>;

  constructor(private produtosService:ProdutosServiceService) { }

  ngOnInit() {
    this.getProdutosMaisVendidosPorCategoria();
  }

  getProdutosMaisVendidosPorCategoria(){
    this.produtosMaisVendidosLoja = this.produtosService.getQuatroProdutosMaisVendidosLojaCarousel();
    this.produtosMaisVendidosEletroDomesticos = this.produtosService.getQuatroProdutosMaisVendidosPorCategoriaCarousel(TipoProduto["Eletrodomesticos"]);
    this.produtosMaisVendidosInformatica = this.produtosService.getQuatroProdutosMaisVendidosPorCategoriaCarousel(TipoProduto["Informática"]);
    this.produtosMaisVendidosMoveis = this.produtosService.getQuatroProdutosMaisVendidosPorCategoriaCarousel(TipoProduto["Móveis"]);
    this.produtosMaisVendidosTelefonesCelulares = this.produtosService.getQuatroProdutosMaisVendidosPorCategoriaCarousel(TipoProduto["Telefones Celulares"]);
    this.produtosMaisVendidosUtilidadesDomestricas = this.produtosService.getQuatroProdutosMaisVendidosPorCategoriaCarousel(TipoProduto["Utilidades Domesticas"]);
    this.produtosMaisVendidosEsporte = this.produtosService.getQuatroProdutosMaisVendidosPorCategoriaCarousel(TipoProduto.Esporte);
    this.produtosMaisVendidosTvVideo = this.produtosService.getQuatroProdutosMaisVendidosPorCategoriaCarousel(TipoProduto["Tv e Vídeo"]);
  }
}
