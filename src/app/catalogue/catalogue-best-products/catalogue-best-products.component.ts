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
    this.produtosMaisVendidosEletroDomesticos = this.produtosMaisVendidosEletroDomesticos = this.produtosService.getQuatroProdutosMaisVendidosPorCategoria(TipoProduto.Eletrodomesticos);
    this.produtosMaisVendidosInformatica = this.produtosMaisVendidosInformatica = this.produtosService.getQuatroProdutosMaisVendidosPorCategoria(TipoProduto.Informatica);
    this.produtosMaisVendidosMoveis = this.produtosMaisVendidosMoveis = this.produtosService.getQuatroProdutosMaisVendidosPorCategoria(TipoProduto.Moveis);
    this.produtosMaisVendidosTelefonesCelulares = this.produtosMaisVendidosTelefonesCelulares = this.produtosService.getQuatroProdutosMaisVendidosPorCategoria(TipoProduto.TelefonesCelulares);
    this.produtosMaisVendidosUtilidadesDomestricas = this.produtosMaisVendidosUtilidadesDomestricas = this.produtosService.getQuatroProdutosMaisVendidosPorCategoria(TipoProduto.UtilidadesDomesticas);
    this.produtosMaisVendidosEsporte = this.produtosMaisVendidosEsporte = this.produtosService.getQuatroProdutosMaisVendidosPorCategoria(TipoProduto.Esporte);
    this.produtosMaisVendidosTvVideo = this.produtosMaisVendidosTvVideo = this.produtosService.getQuatroProdutosMaisVendidosPorCategoria(TipoProduto.TvVideo);
  }
}
