// Import du décorateur @Input()
import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-generic-alert-button',
    imports: [],
    templateUrl: './generic-alert-button.component.html',
    styleUrl: './generic-alert-button.component.css'
})
export class GenericAlertButtonComponent {
  // Input pour récupérer le titre du boutton
  @Input()
  buttonTitle!: string;
  // Input pour récupérer le message à afficher
  @Input()
  alertMessage!: string;
  onClick() {
      // Nous utilisons le mot clef 'this' pour accéder aux propriétés du composant
      // En effet, il s'agit bien de la propriété du composant et non d'un paramètre qu'on lui passerait
    alert(this.alertMessage);
  }
}
