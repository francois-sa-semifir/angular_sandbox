import { Component } from '@angular/core';
// Import du bouton générique
import { GenericAlertButtonComponent } from '../01_generic-alert-button/generic-alert-button.component'

@Component({
    selector: 'app-button-menu',
    //Utilisation de l'import
    imports: [GenericAlertButtonComponent],
    templateUrl: './button-menu.component.html',
    styleUrl: './button-menu.component.css'
})
export class ButtonMenuComponent {
  // Définition de la liste, contenant les attributs des boutons
  buttons: any[] = [
    {
      buttonTitleParent: 'Marco',
      alertMessageParent: 'Polo !',
    },
    {
      buttonTitleParent: 'Toto',
      alertMessageParent: 'Tata !',
    }
  ];
}
