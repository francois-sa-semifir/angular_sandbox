import { Component } from '@angular/core';

@Component({ // Décorateur qui indique que c'est un composant
  selector: 'app-premier-composant', // Defini le nom de la balise html
  standalone: true,
  imports: [],
  templateUrl: './premier-composant.component.html', // Defini le template html
  styleUrl: './premier-composant.component.css' // Defini le template css
})
// Création de la classe du composant
// Implémente des interfaces propres à Angular
export class PremierComposantComponent {

}
