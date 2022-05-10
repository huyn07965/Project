import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service'
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  productss: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getProductss();
  }

  getProducts(): void {
    this.productService.getProducts()
    .subscribe(products => this.products = products.slice(0, 4));
  }
  getProductss(): void {
    this.productService.getProducts()
    .subscribe(productss => this.productss = productss.slice(25, 29));
  }
  Home: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    autoWidth: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    navSpeed: true,
    navText: ['<','>'],
    responsive:{
      0 : { 
        items : 3
      } , 
      400 : { 
        items : 3
      } , 
      740 : { 
        items : 3
      } , 
      940 : { 
        items : 3
      } 
    },
    nav: true
  }


}
