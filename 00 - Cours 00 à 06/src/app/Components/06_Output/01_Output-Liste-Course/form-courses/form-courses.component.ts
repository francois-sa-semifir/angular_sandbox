import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-courses',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-courses.component.html',
  styleUrl: './form-courses.component.css'
})
export class FormCoursesComponent {

  // On déclare notre Output
  @Output()
  // Il est de type EventEmitter
  // La valeur <any> correspond au type de l'objet qui sera envoyé
  // Pour le moment on le type en Any
  // Nous verrons plus tard comment le typer à partir d'un modèle
  onAddArticle: EventEmitter<any> = new EventEmitter();

  // On déclare notre formulaire comme d'habitude
  article: FormGroup;
  // On déclare une variable qui indique si le formulaire est validé ou non
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.article = this.formBuilder.group({
      designation: ['', Validators.required],
      prix: ['', Validators.required],
    });
  }
  // Création d'une méthode privée pour reset le formulaire
  private resetForm(): void {
    // On réinitialise le formulaire
    this.article.reset();
    this.submitted = false;
  }


  // On déclare la méthode qui sera appelée lorsque l'utilisateur cliquera sur le bouton
  public onSubmit(): void {
    this.submitted = true;
    if (this.article.valid) {
      // Si le formulaire est valide, on envoie l'objet à l'écouteur
      this.onAddArticle.emit(this.article.value);
      // puis on appelle notre méthode pour reset
      this.resetForm();
    } else {
      console.log('Formulaire invalide');
    }
  }

  // Pour nous faciliter la vie, on déclare un getter
  get form() {
    // Il retournera notre formControl
    return this.article.controls;
  }
}
