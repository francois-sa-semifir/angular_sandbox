import { Component, input } from '@angular/core';
// Import de notre composant enfant : `product-card.component.ts`
import { ProductCardComponent } from '../product-card/product-card.component'
@Component({
    selector: 'app-product-list',
    imports: [ProductCardComponent],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  // Création d'un input pour récupérer les objets passés par le composant parent
  readonly products = input<any[]>([]);

}
