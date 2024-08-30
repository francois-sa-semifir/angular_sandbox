import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  // Déclaration du tableau utilisateurs, avec un utilisateur exemple.
  users: any[] = [
    {
      nom: 'Nareff',
      prenom: 'Paul',
      email: 'paul.nareff@gmail.com',
      telephone: '0123456789',
      entreprise: 'World Company',
    },
  ];

  // Déclaration du formulaire
  userForm: FormGroup;

  // Définition d'un booléen avec une valeur par défaut à false
  // Servira à s'assurer de la soumission du formulaire
  submitted: boolean = false;

  // Ajout du formulaire dans le constructeur
  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      // Attribut nom avec un validateur 'required' et une longueur minimale de 2
      nom: ['', [Validators.minLength(2), Validators.required]],
      // Attribut prenom avec un validateur 'required' et une longueur minimale de 2
      prenom: ['', [Validators.minLength(2), Validators.required]],
      // Attribut email avec un validateur de type email
      email: ['', [Validators.email, Validators.required]],
      // Attribut telephone avec un validateur 'required' et une longueur minimale de 10
      telephone: ['', [Validators.minLength(10), Validators.required]],
      // Attribut entreprise avec un validateur 'required' et une longueur minimale de 2
      entreprise: ['', [Validators.minLength(2), Validators.required]],
    });
  }

  // Méthode pour ajotuer un utilisateur
  // Elle est privée et sera appellée par la méthode onSubmit
  private addUser(): void {
    this.users.push(this.userForm.value);
    this.userForm.reset();
    this.submitted = false;
  }

  // Méthode `onSubmit()` pour gérer la soumission du formulaire
  public onSubmit(): void {
    this.submitted = true
    if (this.userForm.valid) {
      this.addUser();
    }
  }

  // Getter pour accéder aux contrôles du formulaire
  public get form() {
    return this.userForm.controls;
  }
}