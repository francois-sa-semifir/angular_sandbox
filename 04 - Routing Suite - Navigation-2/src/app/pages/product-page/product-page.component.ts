// import du Oninit
import { Component, OnInit } from '@angular/core';
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

export class ProductPageComponent implements OnInit {
// On crée une instance pour récupérer les datas
// Ici on est obligé de 'tricher' un peu car nous n'avons pas encore vu les services
// On créé donc une instance de ProductsPageComponent et on récupère le contenu de films et albums
  films = new ProductsPageComponent().films;
  albums = new ProductsPageComponent().albums;
    
// On ajoute tout ça dans une seule et même variable grâce à la méthode 'concat()'
  products = this.films.concat(this.albums);

// On déclare une variable qui contiendra l'article dont l'ID est présent dans l'URI
  product!: any;

// On déclare nos dépendances dans le constructeur
  constructor(private route: ActivatedRoute) {}

// Et on implèmente la méthode `ngOnInit()`
  ngOnInit(): void {
    //   On récupère l'ID de l'article contenu dans l'URI
    const id = this.route.snapshot.paramMap.get('id');
    // Si tout s'est bien passé, on récupère l'article correspondant dans notre tableau de produits
    if (id) {
      this.product = this.products.find((product) => product.id == id);
    }
  }
}