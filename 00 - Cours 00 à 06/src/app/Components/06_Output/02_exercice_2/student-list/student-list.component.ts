import { Component, input, output } from '@angular/core';
// Import des pipes pour le formatage dans le template
import { DatePipe, UpperCasePipe } from '@angular/common';

export type Student = { name: string; age: number; enrollmentDate: Date };

@Component({
    selector: 'app-student-list',
    imports: [DatePipe, UpperCasePipe],
    templateUrl: './student-list.component.html',
    styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  // Liste des étudiants reçue depuis le parent (StudentMainComponent)
  readonly students = input<Student[]>([]);

  // Émet des événements au parent pour la suppression et l'affichage des détails
  readonly deleteStudentEvent = output<number>();
  readonly viewDetailEvent = output<{
    name: string;
    age: number;
    enrollmentDate: Date;
}>();

  // Émet un événement pour afficher les détails de l'étudiant
  viewDetail(student: Student) {
    this.viewDetailEvent.emit(student);
  }

  // Émet un événement pour supprimer l'étudiant
  deleteStudent(index: number) {
    this.deleteStudentEvent.emit(index);
  }

}
