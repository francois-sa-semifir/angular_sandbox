import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-filtre',
  standalone: true,
  imports: [],
  templateUrl: './liste-filtre.component.html',
  styleUrl: './liste-filtre.component.css'
})
export class ListeFiltreComponent {
  // Création d'une liste de noms :
  items: string[] = ['Pierre', 'Paul', 'Christophe'];
}
