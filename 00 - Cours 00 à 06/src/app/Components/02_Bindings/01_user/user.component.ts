import { Component } from '@angular/core';
// -- PARTIE SUR LE TWO WAY BINDING --
// Import du FormsModule
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-user',
    // -- PARTIE SUR LE TWO WAY BINDING --
    // Utilisation du FormsModule
    imports: [FormsModule],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})
export class UserComponent {
  // -- PARTIE SUR LE ONE WAY BINDING --
  // Ajout des attributs directment dans la classe:
  nom: string = 'Marchand'
  prenom: string = 'Eric'

  // -- PARTIE SUR LE TWO WAY BINDING --
  // Ajout de l'attribut 'job' avec une valeur par défaut vide
  job: string = '';

  // -- PARTIE SUR LE PROPERTY BINDING --
  // Ajout d'un attribut pour stocker la valeur d'une image ici prise sur le net
  imageUrl: string = 'https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2009/11/claude-francois-011.jpg?resize=230,275';
}
