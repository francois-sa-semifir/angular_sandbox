import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentListComponent } from '../student-list/student-list.component';
import { StudentDetailComponent } from '../student-detail/student-detail.component';

type Student = { name: string; age: number; enrollmentDate: Date };

@Component({
    selector: 'app-student-main',
    imports: [ReactiveFormsModule, StudentListComponent, StudentDetailComponent],
    templateUrl: './student-main.component.html',
    styleUrls: ['./student-main.component.css']
})
export class StudentMainComponent {
  studentForm: FormGroup;

  // Liste des étudiants (chaque étudiant est un objet avec nom, âge et date d'inscription)
  students: Student[] = [];

  // Étudiant sélectionné pour afficher ses détails
  selectedStudent: Student | null = null;

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      // Initialisation du formulaire avec des validateurs
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: [null, [Validators.required, Validators.min(18)]],
      enrollmentDate: [this.todayYMD()],
    });
  }
  
  // Ajouter un étudiant à la liste si le formulaire est valide
  addStudent() {
    if (!this.studentForm.valid) return;

    // getRawValue() renvoie toutes les valeurs du formulaire,
    // même celles des contrôles éventuellement désactivés (disabled)
    const { name, age, enrollmentDate } = this.studentForm.getRawValue();

    /**
     * Convertit la valeur du contrôle de date en objet Date.
     * - Si c'est déjà un Date (ex. si on utilise un mat-datepicker), on le renvoie tel quel.
     * - Sinon (cas de <input type="date">), on reçoit une chaîne 'YYYY-MM-DD' :
     *   - on la découpe en [année, mois, jour]
     *   - new Date(y, m-1, d) crée un objet Date en utilisant la timezone locale
     *     (attention : mois = 0-11 dans JS, donc on retire 1)
     */
    const toLocalDate = (d: string | Date): Date => {
      if (d instanceof Date) return d;
      const [y, m, day] = d.split('-').map(Number);
      return new Date(y, m - 1, day);
    };

    // Création d'un nouvel objet Student conforme à notre interface
    const newStudent: Student = {
      // trim() pour enlever les espaces accidentels en début/fin
      name: String(name).trim(),
      age: Number(age), // conversion explicite pour être sûr que ce soit bien un number
      enrollmentDate: toLocalDate(enrollmentDate as string | Date),
    };

    // Ajout de l'étudiant dans le tableau
    this.students.push(newStudent);

    // Réinitialisation du formulaire :
    // - On remet name/age vides
    // - On remet la date à aujourd'hui (au format string 'YYYY-MM-DD')
    this.studentForm.reset({ name: '', age: null, enrollmentDate: this.todayYMD() });
  }

  // Supprimer un étudiant de la liste
  deleteStudent(index: number) {
    this.students.splice(index, 1);
    if (this.selectedStudent && !this.students.includes(this.selectedStudent)) {
      this.selectedStudent = null;
    }
  }

  // Affiche les détails d'un étudiant
  viewStudentDetail(student: Student) {
    this.selectedStudent = student;
  }

  /**
   * Retourne la date du jour au format 'YYYY-MM-DD'.
   * Utile pour initialiser un <input type="date">, car cet input attend une string.
   * Exemple : 2025-09-17
   */
  private todayYMD(): string {
    const t = new Date(); // Date actuelle
    const mm = String(t.getMonth() + 1).padStart(2, '0'); // Mois 1-12, avec zéro devant si besoin
    const dd = String(t.getDate()).padStart(2, '0');      // Jour 01-31
    return `${t.getFullYear()}-${mm}-${dd}`;
  }
}
