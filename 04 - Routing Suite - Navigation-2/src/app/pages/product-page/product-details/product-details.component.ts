import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-product-details',
    imports: [
        MatCardModule,
        MatButtonModule,
        RouterLink,
    ],
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

// Ici pas besoin de fioritures !
// On veut juste récupérer les datas
  @Input()
  product!: any;
}
