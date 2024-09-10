// Import du décorateur @Input
import { Component, Input } from '@angular/core';
// Import du CommonModule pour gérer les pipes
import { CommonModule } from '@angular/common';
// Import du MatCarModule et du MatButtonModule
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  // Input pour récupérer un objet passé par le composant parent
  @Input()
  product!: any
}
