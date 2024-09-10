import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-horloge',
  standalone: true,
  imports: [],
  templateUrl: './horloge.component.html',
  styleUrl: './horloge.component.css'
})
export class HorlogeComponent {
  // Cette classe n'est chargée QUE de l'affichage de l'heure.
  // Ce n'est pas son taf (dans un monde idéal) de gérer le calcul de l'heure.
  // On définit une heure par défaut pour que l'horloge ne soit pas vide au chargement de la page.
  // On précise qu'il y aura un input afin de pouvoir la mettre à jour.
  @Input()
  time: string = '00:00:00';
}
