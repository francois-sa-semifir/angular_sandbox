// Import des outils Angular
import { Component, signal } from '@angular/core';
// Import des APIs Signal Forms d'Angular 22
import { form, FormField, required, minLength, min } from '@angular/forms/signals';
// Import des composants enfants
import { StudentListComponent } from '../student-list/student-list.component';
import { StudentDetailComponent } from '../student-detail/student-detail.component';

// Interface typée pour un étudiant
type Student = { name: string; age: number; enrollmentDate: Date };

@Component({
    selector: 'app-student-main',
    // FormField remplace ReactiveFormsModule
    imports: [FormField, StudentListComponent, StudentDetailComponent],
    templateUrl: './student-main.component.html',
    styleUrl: './student-main.component.css'
})
export class StudentMainComponent {

  // Signal = modèle de données réactif pour le formulaire
  studentModel = signal<{ name: string; age: number; enrollmentDate: string }>({
    name: '',
    age: 0,
    enrollmentDate: this.todayYMD(),
  });

  // form() avec schéma de validation
  // Remplace entièrement le constructeur + FormBuilder + Validators
  studentForm = form(this.studentModel, (schemaPath) => {
    required(schemaPath.name, { message: 'Le nom est obligatoire' });
    minLength(schemaPath.name, 3, { message: 'Le nom doit comporter au moins 3 caractères' });
    required(schemaPath.age, { message: "L'âge est obligatoire" });
    min(schemaPath.age, 18, { message: "L'âge doit être supérieur ou égal à 18" });
  });

  // Liste des étudiants
  students: Student[] = [];

  // Étudiant sélectionné pour afficher ses détails
  selectedStudent: Student | null = null;

  // Ajouter un étudiant à la liste si le formulaire est valide
  addStudent() {
    if (this.studentForm().invalid()) return;

    // On récupère les valeurs du signal
    const { name, age, enrollmentDate } = this.studentModel();

    /**
     * Convertit la valeur de date (string 'YYYY-MM-DD') en objet Date.
     * - <input type="date"> + [formField] renvoie toujours une string 'YYYY-MM-DD'
     * - new Date(y, m-1, d) crée un objet Date en timezone locale
     */
    const toLocalDate = (d: string): Date => {
      const [y, m, day] = d.split('-').map(Number);
      return new Date(y, m - 1, day);
    };

    // Création d'un nouvel objet Student
    const newStudent: Student = {
      name: String(name).trim(),
      age: Number(age),
      enrollmentDate: toLocalDate(enrollmentDate),
    };

    // Ajout de l'étudiant dans le tableau
    this.students.push(newStudent);

    // Réinitialisation du formulaire via le signal
    this.studentModel.set({ name: '', age: 0, enrollmentDate: this.todayYMD() });
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
    const t = new Date();
    const mm = String(t.getMonth() + 1).padStart(2, '0');
    const dd = String(t.getDate()).padStart(2, '0');
    return `${t.getFullYear()}-${mm}-${dd}`;
  }
}
