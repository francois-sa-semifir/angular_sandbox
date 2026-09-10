// Import du décorateur @Input
import { Component, input } from '@angular/core';
import { SlicePipe } from '@angular/common';
// Import dupour gérer les pipes
// Import du MatCarModule et du MatButtonModule
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@Component({
    selector: 'app-product-card',
    imports: [
        SlicePipe,
        MatCardModule,
        MatButtonModule,],
    templateUrl: './product-card.component.html',
    styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  // Input pour récupérer un objet passé par le composant parent
  readonly product = input.required<any>();
}
