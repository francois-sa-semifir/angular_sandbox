import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsPageComponent } from '../products-page/products-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    ProductDetailsComponent
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit {
    films = new ProductsPageComponent().films;
    albums = new ProductsPageComponent().albums;
  
    products = this.films.concat(this.albums);
  
    product!: any;
  
    constructor(private route: ActivatedRoute) {}
  
    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.product = this.products.find((product) => product.id == id);
      }
    }
  }