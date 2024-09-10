import { Component } from '@angular/core';
// Import du RouterLink pour permettre la navigation
import { RouterLink } from '@angular/router';
// Import des composants Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink,
    MatToolbarModule,
    MatButtonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
