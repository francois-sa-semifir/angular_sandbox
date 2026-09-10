// Import du RouterLink
import { RouterLink } from '@angular/router';
import { Component, input } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-product-card',
    imports: [
        SlicePipe,
        MatCardModule,
        MatButtonModule,RouterLink,
    ],
    templateUrl: './product-card.component.html',
    styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  readonly product = input.required<any>();
}
