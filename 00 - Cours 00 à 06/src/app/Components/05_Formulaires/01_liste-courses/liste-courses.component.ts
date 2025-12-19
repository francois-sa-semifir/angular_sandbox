import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-liste-courses',
    imports: [FormsModule],
    templateUrl: './liste-courses.component.html',
    styleUrl: './liste-courses.component.css'
})
export class ListeCoursesComponent {
  // Création d'une liste d'articles vides.
  articles: string[] = []
  // Création d'une variable pour stocker les nouveaux articles
  // en vue de les push dans notre tableau d'articles.
  newArticle!:string

  // Création d'une méthodes permettant d'ajouter un nouvel article
  addArticle() {
    // Il push l'article dans notre tableau d'articles.
    this.articles.push(this.newArticle)
    // Puis vide notre variable newArticle pour que le champs soit vide.
    this.newArticle = ''
  }
}