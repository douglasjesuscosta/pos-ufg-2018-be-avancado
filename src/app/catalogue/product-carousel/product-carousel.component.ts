import { Component, OnInit, Input } from '@angular/core';  
import { Produto } from 'src/app/models/produto-model/Produto';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css']
})
export class ProductCarouselComponent implements OnInit {

  @Input('products') products: Array<Produto>;
  slideConfig = { "slidesToShow": 3, "slidesToScroll": 1, autoplay: true, autoplaySpeed: 3000, method: {} };

  constructor(private carrinhoService:CartService) {  
  }


  adicionarCarrinho(produto:Produto){
    console.log("TESTE CARRINHO");
    this.carrinhoService.addProduto(produto);
  }

  ngOnInit() {
    
  }

}
