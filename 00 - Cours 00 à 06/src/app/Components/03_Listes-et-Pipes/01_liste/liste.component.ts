import { Component } from '@angular/core';

@Component({
    selector: 'app-liste',
    imports: [],
    templateUrl: './liste.component.html',
    styleUrl: './liste.component.css'
})
export class ListeComponent {
  // On déclare ici notre liste de prénoms
  items = [ {id : 1, name : 'Carlos'}, {id : 2, name : 'Johnny Halliday'}, {id : 3, name : 'Michel Polnareff'}];
}
