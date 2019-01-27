import { Component, OnInit, Input } from '@angular/core';  
import { Produto } from 'src/app/models/produto-model/Produto';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css']
})
export class ProductCarouselComponent implements OnInit {

  @Input('products') products: Array<Produto>;
  slideConfig = { "slidesToShow": 3, "slidesToScroll": 4, autoplay: true, autoplaySpeed: 3000, method: {} };

  constructor() {  
  }

  ngOnInit() {
    
  }

  

}
