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

  users: any[] = [
    {
      nom: 'Nareff',
      prenom: 'Paul',
      email: 'paul.nareff@gmail.com',
      telephone: '0123456789',
      entreprise: 'World Company',
    },
  ];

  userForm: FormGroup;

  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      nom: ['', [Validators.minLength(2), Validators.required]],
      prenom: ['', [Validators.minLength(2), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      // Attribut telephone avec un validateur 'required' et une longueur minimale de 10
      // On déclare ici un tableau de FormArray
      // On y ajoute les controles pour le numéro de téléphone
      telephones: this.formBuilder.array([
        this.formBuilder.control('', [Validators.minLength(10), Validators.required])
      ]),
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