// Import des outils Angular
import { Component, signal, output } from '@angular/core';
// Import des APIs Signal Forms d'Angular 22
import { form, FormField, required } from '@angular/forms/signals';

// Interface typée pour un article
interface Article {
  designation: string;
  prix: number;
}

@Component({
    selector: 'app-form-courses',
    // FormField remplace ReactiveFormsModule
    imports: [FormField],
    templateUrl: './form-courses.component.html',
    styleUrl: './form-courses.component.css'
})
export class FormCoursesComponent {

  // On déclare notre Output avec la nouvelle API output()
  // La valeur <Article> correspond au type de l'objet qui sera envoyé
  // Typé avec notre interface au lieu de Any — typage fort !
  readonly onAddArticle = output<Article>();

  // Signal = modèle de données réactif
  articleModel = signal<Article>({ designation: '', prix: 0 });

  // form() avec schéma de validation
  articleForm = form(this.articleModel, (schemaPath) => {
    required(schemaPath.designation, { message: 'Nom invalide' });
    required(schemaPath.prix, { message: 'Prix invalide' });
  });

  // Suivi de soumission
  submitted = false;

  // Reset du formulaire — on réinitialise le signal
  private resetForm(): void {
    this.articleModel.set({ designation: '', prix: 0 });
    this.submitted = false;
  }

  // Gestion de la soumission
  // Si valide, on émet l'article vers le parent via output()
  public onSubmit(): void {
    this.submitted = true;
    if (this.articleForm().valid()) {
      // On émet la valeur du signal vers le parent
      this.onAddArticle.emit({ ...this.articleModel() });
      this.resetForm();
    } else {
      console.log('Formulaire invalide');
    }
  }
}
