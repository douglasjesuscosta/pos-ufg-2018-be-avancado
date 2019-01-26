import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto-model/Produto';
import { ProdutosServiceService } from '../services/produtos-service.service';
import { CartService } from '../services/cart.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Produto;
  id: number;
  photos: String[] = [];
  slideConfig = { "slidesToShow": 1, "slidesToScroll": 1, autoplay: true, autoplaySpeed: 3000, method: {} };

  constructor(private produtoService: ProdutosServiceService, private cartService: CartService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.product = this.produtoService.getProduto(this.id);
    });

    this.photos.push(this.product.p_urlPrincipalImage);
    this.photos.push(...this.product.p_urlsImages);
  }

  onAddProductCart() {
    this.cartService.addProduto(this.id);
    this.router.navigate(['/meucarrinho'], {relativeTo: this.route});
  }

}
