import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-reactive-liste-courses',
    imports: [ReactiveFormsModule],
    templateUrl: './reactive-liste-courses.component.html',
    styleUrl: './reactive-liste-courses.component.css'
})
export class ReactiveListeCoursesComponent {

  // Définition des variables

  // Article est déclaré en tant que FormGroup
  article: FormGroup
  // Articles est la liste des articles, qui contiendra des articles
  // Puisque nous n'avons pas de 'model', on le type en any pour le moment
  articles: any[] = []

  constructor() {
    // Dans le constructeur, on ajoute notre formgroup qui contiendra nos formcontrols
    // C'est un peu comme déclarer un objet !
    this.article = new FormGroup({
      // Article contient un attribut désignation et un attribut prix
      designation: new FormControl(''),
      prix: new FormControl('')
    });
  }

  // On ajoute une méthode qui permet d'ajouter un article
  // On l'ajoutera coté html sur l'évent 'submit'
  addArticle() {
    // Ajoute l'article à la liste
    this.articles.push(this.article.value);
    // Vide le formulaire
    this.article.reset();
  }

  // Définition d'un getter pour pouvoir afficher le prix total
  get totalPrice(): number {
    return this.articles.reduce((total, article) => total + article.prix, 0);
  }
}
