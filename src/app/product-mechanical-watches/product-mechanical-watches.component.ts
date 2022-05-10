import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-product-mechanical-watches',
  templateUrl: './product-mechanical-watches.component.html',
  styleUrls: ['./product-mechanical-watches.component.css']
})
export class ProductMechanicalWatchesComponent implements OnInit {

  products: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
    .subscribe(products => this.products = products);
  }

}
