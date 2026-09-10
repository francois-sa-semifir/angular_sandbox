import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsPageComponent } from '../products-page/products-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@Component({
    selector: 'app-product-page',
    imports: [
        ProductDetailsComponent
    ],
    templateUrl: './product-page.component.html',
    styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
    films = new ProductsPageComponent().films;
    albums = new ProductsPageComponent().albums;

    products = this.films.concat(this.albums);

    // inject() remplace le constructeur DI
    private route = inject(ActivatedRoute);

    // On récupère l'ID de l'article contenu dans l'URI
    private id = this.route.snapshot.paramMap.get('id');

    // On déclare l'article correspondant à l'ID
    product = this.id
      ? this.products.find((product) => product.id == this.id)
      : null;
}