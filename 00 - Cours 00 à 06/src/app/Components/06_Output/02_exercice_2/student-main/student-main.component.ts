import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentListComponent } from '../student-list/student-list.component';
import { StudentDetailComponent } from '../student-detail/student-detail.component';

@Component({
  selector: 'app-student-main',
  standalone: true,
  imports: [ReactiveFormsModule, StudentListComponent, StudentDetailComponent],
  templateUrl: './student-main.component.html',
  styleUrls: ['./student-main.component.css']
})
export class StudentMainComponent {
  studentForm: FormGroup;

  // Liste des étudiants (chaque étudiant est un objet avec nom, âge et date d'inscription)
  students: { name: string, age: number, enrollmentDate: Date }[] = [];

  // Étudiant sélectionné pour afficher ses détails
  selectedStudent: { name: string, age: number, enrollmentDate: Date } | null = null;

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      // Initialisation du formulaire avec des validateurs
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: [null, [Validators.required, Validators.min(18)]],
      enrollmentDate: [new Date()]
    });
  }

  // Ajouter un étudiant à la liste si le formulaire est valide
  addStudent() {
    if (this.studentForm.valid) {
      this.students.push(this.studentForm.value);
      this.studentForm.reset({ enrollmentDate: new Date() });
    }
  }

  // Supprimer un étudiant de la liste
  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }

  // Affiche les détails d'un étudiant
  viewStudentDetail(student: { name: string, age: number, enrollmentDate: Date }) {
    this.selectedStudent = student;
  }
}
