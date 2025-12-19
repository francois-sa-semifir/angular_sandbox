import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-reactive-liste-courses-validators',
    imports: [ReactiveFormsModule],
    templateUrl: './reactive-liste-courses-validators.component.html',
    styleUrl: './reactive-liste-courses-validators.component.css'
})
export class ReactiveListeCoursesValidatorsComponent {

  article: FormGroup
  articles: any[] = []
  // Modification du constructeur
  constructor() {
    this.article = new FormGroup({
      // On ajoute les validateurs 'required' en second param
      designation: new FormControl('', Validators.required),
      prix: new FormControl('', Validators.required)
    });
   }
  addArticle() {
    this.articles.push(this.article.value);
    this.article.reset();
  }

  get totalPrice(): number {
    return this.articles.reduce((total, article) => total + article.prix, 0);
  }
}
