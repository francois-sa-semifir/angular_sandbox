import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Ajout des attributs directment dans la classe:
  nom: string = 'Marchand'
  prenom: string = 'Eric'
  // Ajout de l'attribut 'job' avec une valeur par défaut vide
  job: string = '';
  imageUrl: string = 'https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2009/11/claude-francois-011.jpg?resize=230,275';
}
