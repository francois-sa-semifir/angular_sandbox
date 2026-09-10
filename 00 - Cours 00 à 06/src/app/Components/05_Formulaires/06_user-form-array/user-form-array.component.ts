// Import des outils Angular
import { Component, signal } from '@angular/core';
// Import des APIs Signal Forms d'Angular 22
import { form, FormField, required, email, minLength } from '@angular/forms/signals';

// Interface typée pour un utilisateur avec un tableau de téléphones
// En Signal Forms, un tableau dans le modèle est un simple tableau TypeScript
// Plus besoin de FormArray !
interface User {
  nom: string;
  prenom: string;
  email: string;
  telephones: string[];
  entreprise: string;
}

@Component({
    selector: 'app-user-form-array',
    imports: [FormField],
    templateUrl: './user-form-array.component.html',
    styleUrl: './user-form-array.component.css'
})
export class UserFormArrayComponent {

  // Données existantes
  users: User[] = [
    {
      nom: 'Nareff',
      prenom: 'Paul',
      email: 'paul.nareff@gmail.com',
      telephones: ['0123456789'],
      entreprise: 'World Company',
    },
  ];

  // Signal = modèle de données réactif
  // Le tableau telephones est un simple string[] dans le modèle
  userModel = signal<User>({
    nom: '',
    prenom: '',
    email: '',
    telephones: [''],
    entreprise: '',
  });

  // form() avec schéma de validation
  // Note : la validation des éléments de tableau se fait
  // en itérant sur les éléments du schéma
  userForm = form(this.userModel, (schemaPath) => {
    required(schemaPath.nom, { message: 'Nom obligatoire' });
    minLength(schemaPath.nom, 2, { message: 'Nom doit contenir au minimum 2 caractères' });
    required(schemaPath.prenom, { message: 'Prénom obligatoire' });
    minLength(schemaPath.prenom, 2, { message: 'Prénom doit contenir au minimum 2 caractères' });
    required(schemaPath.email, { message: 'Email obligatoire' });
    email(schemaPath.email, { message: 'Email invalide' });
    required(schemaPath.entreprise, { message: 'Entreprise obligatoire' });
    minLength(schemaPath.entreprise, 2, { message: 'Entreprise doit contenir au minimum 2 caractères' });
  });

  // Suivi de soumission
  submitted = false;

  // Ajoute l'utilisateur
  private addUser(): void {
    this.users.push({ ...this.userModel() });
    this.userModel.set({ nom: '', prenom: '', email: '', telephones: [''], entreprise: '' });
    this.submitted = false;
  }

  // Gestion de la soumission
  public onSubmit(): void {
    this.submitted = true;
    if (this.userForm().valid()) {
      this.addUser();
    }
    console.log(this.users);
  }

  // Ajoute un champ téléphone au tableau
  // En Signal Forms, on manipule directement le signal !
  // Plus besoin de FormArray.push(fb.control(...))
  public addTelephone(): void {
    const current = this.userModel();
    this.userModel.set({
      ...current,
      telephones: [...current.telephones, '']
    });
  }

  // Supprime le dernier champ téléphone
  public removeTelephone(): void {
    const current = this.userModel();
    if (current.telephones.length > 1) {
      this.userModel.set({
        ...current,
        telephones: current.telephones.slice(0, -1)
      });
    }
  }
}