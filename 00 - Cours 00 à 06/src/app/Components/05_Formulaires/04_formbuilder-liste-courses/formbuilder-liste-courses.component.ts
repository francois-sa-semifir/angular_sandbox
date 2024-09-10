// Import du module
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formbuilder-liste-courses',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formbuilder-liste-courses.component.html',
  styleUrl: './formbuilder-liste-courses.component.css'
})

export class FormbuilderListeCoursesComponent {

  // Déclaration du FormGroup
  article: FormGroup;

  // Ajout d'un booléen pour vérifier si le formulaire est soumis
  submitted: boolean = false;

  // Déclaration de la liste des articles
  articles: any[] = [];

  // Déclaration du formbuilder dans le constructeur
  // On rappelle la variable qu'on a déclaré dans le constructeur
  // On ajoute la méthode '.group()
  constructor(private formBuilder: FormBuilder) {
    this.article=this.formBuilder.group({
      // On déclare les champs du formulaire
      // Pas besoin de générer de FormControls
      // On précise aussi les validations
      designation: ['', Validators.required],
      prix: ['', Validators.required],
    });
  }

  // Déclaration d'une méthode pour ajouter les articles
  // Elle est privée et sera appelée par la méthode onSubmit
  private addArticle() {
    // Push du formulaire dans la liste
    this.articles.push(this.article.value);
    // Reset du formulaire
    this.article.reset();
    // On repasse submitted à false
    this.submitted = false;
}

  // Méthode onSubmit pour gérer la soumission
  onSubmit(): boolean {
    this.submitted = true;
    // Appel du validateur 'invalid' pour vérifier
    if (this.article.invalid) {
      return false;
    } else {
      // Si le formulaire est valide, on appelle la méthode addArticle
      this.addArticle();
      return true;
    }
  }

  // Définition d'un getter pour pouvoir afficher le prix total
  get totalPrice(): number {
    return this.articles.reduce((total, article) => total + article.prix, 0);
  }

  // Pour nous faciliter la vie, on déclare un getter
  get form() {
    // Il retournera notre formControl
    return this.article.controls;
  }
}
