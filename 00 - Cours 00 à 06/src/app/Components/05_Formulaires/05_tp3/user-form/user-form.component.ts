// Import des outils Angular
import { Component, signal } from '@angular/core';
// Import des APIs Signal Forms d'Angular 22
// form() : crée le formulaire signal
// FormField : directive [formField]
// required, email, minLength : validateurs intégrés
import { form, FormField, required, email, minLength } from '@angular/forms/signals';

// Interface typée pour un utilisateur — modèle fort
interface User {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  entreprise: string;
}

@Component({
    selector: 'app-user-form',
    // FormField remplace ReactiveFormsModule
    imports: [FormField],
    templateUrl: './user-form.component.html',
    styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  // Déclaration du tableau utilisateurs, avec un utilisateur exemple
  users: User[] = [
    {
      nom: 'Nareff',
      prenom: 'Paul',
      email: 'paul.nareff@gmail.com',
      telephone: '0123456789',
      entreprise: 'World Company',
    },
  ];

  // Signal = modèle de données réactif
  userModel = signal<User>({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    entreprise: '',
  });

  // form() avec schéma de validation complet
  // Comparé au FormBuilder :
  //   - Plus de constructeur avec injection de FormBuilder
  //   - Plus de tableau [valeur, [validateurs]] obscur
  //   - Validation centralisée, lisible, avec messages explicites
  userForm = form(this.userModel, (schemaPath) => {
    // Nom : obligatoire + minimum 2 caractères
    required(schemaPath.nom, { message: 'Nom obligatoire' });
    minLength(schemaPath.nom, 2, { message: 'Nom doit contenir au minimum 2 caractères' });
    // Prénom : obligatoire + minimum 2 caractères
    required(schemaPath.prenom, { message: 'Prénom obligatoire' });
    minLength(schemaPath.prenom, 2, { message: 'Prénom doit contenir au minimum 2 caractères' });
    // Email : obligatoire + format email
    required(schemaPath.email, { message: 'Email obligatoire' });
    email(schemaPath.email, { message: 'Email invalide' });
    // Téléphone : obligatoire + minimum 10 caractères
    required(schemaPath.telephone, { message: 'Téléphone obligatoire' });
    minLength(schemaPath.telephone, 10, { message: 'Téléphone doit contenir au moins 10 chiffres' });
    // Entreprise : obligatoire + minimum 2 caractères
    required(schemaPath.entreprise, { message: 'Entreprise obligatoire' });
    minLength(schemaPath.entreprise, 2, { message: 'Entreprise doit contenir au minimum 2 caractères' });
  });

  // Booléen pour le suivi de soumission
  submitted = false;

  // Méthode privée pour ajouter l'utilisateur
  private addUser(): void {
    this.users.push({ ...this.userModel() });
    this.userModel.set({ nom: '', prenom: '', email: '', telephone: '', entreprise: '' });
    this.submitted = false;
  }

  // Gestion de la soumission
  public onSubmit(): void {
    this.submitted = true;
    // valid() est un signal réactif, remplace this.userForm.valid
    if (this.userForm().valid()) {
      this.addUser();
    }
  }
}