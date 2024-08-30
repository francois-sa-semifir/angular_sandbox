import { Component } from '@angular/core';

@Component({
  selector: 'app-magie',
  standalone: true,
  imports: [],
  templateUrl: './magie.component.html',
  styleUrl: './magie.component.css'
})
export class MagieComponent {
  // Déclaration d'un booléen avec une valeur par défaut à true
  hidden: boolean = true;
  // Méthode pour modifier le bool en inversant sa valeur
  toggle() {
    this.hidden = !this.hidden;
  }
}
