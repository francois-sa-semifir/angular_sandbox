// Import des outils Angular
import { Component, signal } from '@angular/core';
// Import des APIs Signal Forms d'Angular 22
// form() : crée un formulaire signal
// FormField : directive [formField] pour le template
// required : validateur intégré
import { form, FormField, required } from '@angular/forms/signals';

// Interface typée pour un article
interface Article {
  designation: string;
  prix: number;
}

@Component({
    selector: 'app-formbuilder-liste-courses',
    // FormField remplace ReactiveFormsModule
    // Plus besoin de FormBuilder : form() fait tout !
    imports: [FormField],
    templateUrl: './formbuilder-liste-courses.component.html',
    styleUrl: './formbuilder-liste-courses.component.css'
})
export class FormbuilderListeCoursesComponent {

  // Signal = modèle de données réactif
  articleModel = signal<Article>({ designation: '', prix: 0 });

  // form() avec schéma de validation
  // Ceci remplace entièrement le pattern :
  //   constructor(private formBuilder: FormBuilder) {
  //     this.article = this.formBuilder.group({ ... })
  //   }
  // Le FormBuilder n'existe plus dans le monde Signal Forms !
  articleForm = form(this.articleModel, (schemaPath) => {
    required(schemaPath.designation, { message: 'Nom invalide' });
    required(schemaPath.prix, { message: 'Prix invalide' });
  });

  // Booléen pour le suivi de soumission
  submitted = false;

  // Liste des articles
  articles: Article[] = [];

  // Méthode privée pour ajouter et réinitialiser
  private addArticle() {
    this.articles.push({ ...this.articleModel() });
    this.articleModel.set({ designation: '', prix: 0 });
    this.submitted = false;
  }

  // Gestion de la soumission avec validation
  onSubmit(): boolean {
    this.submitted = true;
    // articleForm().invalid() remplace this.article.invalid
    if (this.articleForm().invalid()) {
      return false;
    } else {
      this.addArticle();
      return true;
    }
  }

  // Getter pour le prix total
  get totalPrice(): number {
    return this.articles.reduce((total, article) => total + article.prix, 0);
  }
}
