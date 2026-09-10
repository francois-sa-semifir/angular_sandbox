// Import de la fonction input() pour déclarer des inputs
import { Component, input } from '@angular/core';
@Component({
    selector: 'app-generic-alert-button',
    imports: [],
    templateUrl: './generic-alert-button.component.html',
    styleUrl: './generic-alert-button.component.css'
})
export class GenericAlertButtonComponent {
  // Input pour récupérer le titre du boutton
  readonly buttonTitle = input.required<string>();
  // Input pour récupérer le message à afficher
  readonly alertMessage = input.required<string>();
  onClick() {
      // Nous utilisons le mot clef 'this' pour accéder aux propriétés du composant
      // En effet, il s'agit bien de la propriété du composant et non d'un paramètre qu'on lui passerait
    alert(this.alertMessage());
  }
}
