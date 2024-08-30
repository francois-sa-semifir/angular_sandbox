import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-user-form-array',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-form-array.component.html',
  styleUrl: './user-form-array.component.css'
})
export class UserFormArrayComponent {
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

  // On déclare un FormGroup
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
      // On déclare ici un tableau de FormArray
      // On y ajoute les controles pour le numéro de téléphone
      telephones: this.formBuilder.array([
        this.formBuilder.control('', [Validators.minLength(10), Validators.required])
      ]),
      // Attribut entreprise avec un validateur 'required' et une longueur minimale de 2
      entreprise: ['', [Validators.minLength(2), Validators.required]],
    });
  }

  private addUser(): void {
    this.users.push(this.userForm.value);
    this.userForm.reset();
    this.submitted = false;
  }

  public onSubmit(): void {
    this.submitted = true
    if (this.userForm.valid) {
      this.addUser();
    }
    console.log(this.users)
  }

  public get form() {
    return this.userForm.controls;
  }

  // Getter pour accéder à la liste des téléphones
  public get telephones(): FormArray {
    return this.userForm.get('telephones') as FormArray;
  }
  // Méthode pour ajouter un contrôle de téléphone
  // La méthode va push un contrôle de téléphone dans le tableau 'téléphones'
  public addTelephone(): void {
    this.telephones.push(this.formBuilder.control('', [Validators.minLength(10), Validators.required]));
  }
  // Méthode pour supprimer un contrôle de téléphone
  // On retire le dernier élément de l'index
  // NB : le compte commence à 1, l'index commence à 0
  public removeTelephone(): void {
    this.telephones.removeAt(this.telephones.length - 1);
  }
}