// import de inject pour remplacer le constructeur DI
import { Component, inject } from '@angular/core';
// On importe les dépendences
import { ActivatedRoute } from '@angular/router';
// On importe les composants qu'on va utiliser
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
// On crée une instance pour récupérer les datas
// Ici on est obligé de 'tricher' un peu car nous n'avons pas encore vu les services
// On crée donc une instance de ProductsPageComponent et on récupère le contenu de films et albums
  films = new ProductsPageComponent().films;
  albums = new ProductsPageComponent().albums;
    
// On ajoute tout ça dans une seule et même variable grâce à la méthode 'concat()'
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