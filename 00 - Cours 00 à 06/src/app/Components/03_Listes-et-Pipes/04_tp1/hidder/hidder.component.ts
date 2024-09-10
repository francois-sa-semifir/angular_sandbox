import { Component } from '@angular/core';
// Import du composant enfant par sa classe
import { UserCardsComponent } from "../user-cards/user-cards.component";

@Component({
    selector: 'app-hidder',
    standalone: true,
    // Appel de la classe de l'enfant
    imports: [UserCardsComponent],
    templateUrl: './hidder.component.html',
    styleUrl: './hidder.component.css'
})
export class HidderComponent {
  // Création d'un booleen
  hidden: boolean = true;

  // Méthode pour inverer la valeur du booléen
  toggle() {
    this.hidden = !this.hidden;
  }
}
