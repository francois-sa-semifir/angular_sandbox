// Import des outils Angular
import { Component, signal } from '@angular/core';
// Import des APIs Signal Forms d'Angular 22
// form() : crée un formulaire signal
// FormField : directive pour le binding [formField]
// required : validateur intégré (remplace Validators.required)
import { form, FormField, required } from '@angular/forms/signals';

// Interface typée — le modèle de données est explicite
interface Article {
  designation: string;
  prix: number;
}

@Component({
    selector: 'app-reactive-liste-courses-validators',
    imports: [FormField],
    templateUrl: './reactive-liste-courses-validators.component.html',
    styleUrl: './reactive-liste-courses-validators.component.css'
})
export class ReactiveListeCoursesValidatorsComponent {

  // Signal = source de vérité unique pour le formulaire
  articleModel = signal<Article>({ designation: '', prix: 0 });

  // form() avec un second argument : la fonction de schéma de validation
  // schemaPath donne accès aux champs pour y attacher des règles
  // Comparé à Reactive Forms : plus besoin de Validators.required dans le FormControl,
  // la validation est déclarative et centralisée dans le schéma
  articleForm = form(this.articleModel, (schemaPath) => {
    // required() remplace Validators.required
    // Le message personnalisé s'affiche automatiquement dans les erreurs
    required(schemaPath.designation, { message: 'La désignation est requise' });
    required(schemaPath.prix, { message: 'Le prix est requis' });
  });

  // Liste des articles ajoutés
  articles: Article[] = [];

  // Ajoute l'article si le formulaire est valide
  addArticle() {
    this.articles.push({ ...this.articleModel() });
    this.articleModel.set({ designation: '', prix: 0 });
  }

  // Getter pour le prix total
  get totalPrice(): number {
    return this.articles.reduce((total, article) => total + article.prix, 0);
  }
}
