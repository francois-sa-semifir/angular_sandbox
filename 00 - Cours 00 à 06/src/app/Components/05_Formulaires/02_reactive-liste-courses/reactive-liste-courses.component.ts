// Import des outils Angular : Component pour créer le composant, signal pour la réactivité
import { Component, signal } from '@angular/core';
// Import des APIs Signal Forms d'Angular 22
// form() : crée un formulaire signal à partir d'un modèle signal
// FormField : directive pour binder un champ HTML au formulaire signal
import { form, FormField } from '@angular/forms/signals';

// Interface typant notre article — contrairement à Reactive Forms,
// on définit un vrai type TypeScript, pas un FormGroup générique
interface Article {
  designation: string;
  prix: number;
}

@Component({
    selector: 'app-reactive-liste-courses',
    // FormField remplace ReactiveFormsModule
    // Plus besoin de ReactiveFormsModule ni de FormsModule
    imports: [FormField],
    templateUrl: './reactive-liste-courses.component.html',
    styleUrl: './reactive-liste-courses.component.css'
})
export class ReactiveListeCoursesComponent {

  // Le signal EST le modèle de données — c'est la source de vérité unique
  // Toute modification du formulaire met à jour ce signal automatiquement
  articleModel = signal<Article>({ designation: '', prix: 0 });

  // form() crée un arbre réactif (FieldTree) à partir du signal
  // Chaque propriété de l'interface devient un nœud accessible :
  //   articleForm.designation → le champ désignation
  //   articleForm.prix → le champ prix
  articleForm = form(this.articleModel);

  // La liste des articles ajoutés
  articles: Article[] = [];

  // Ajoute l'article courant à la liste
  addArticle() {
    // articleModel() retourne la valeur actuelle du signal
    this.articles.push({ ...this.articleModel() });
    // On réinitialise le modèle — le formulaire se vide automatiquement
    this.articleModel.set({ designation: '', prix: 0 });
  }

  // Getter pour le prix total — Angular détecte le changement via les signaux
  get totalPrice(): number {
    return this.articles.reduce((total, article) => total + article.prix, 0);
  }
}
