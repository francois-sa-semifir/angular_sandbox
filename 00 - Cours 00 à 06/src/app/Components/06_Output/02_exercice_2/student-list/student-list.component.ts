import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type Student = { name: string; age: number; enrollmentDate: Date };

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  // Liste des étudiants reçue depuis le parent (StudentMainComponent)
  @Input() students: Student[] = [];

  // Émet des événements au parent pour la suppression et l'affichage des détails
  @Output() deleteStudentEvent = new EventEmitter<number>();
  @Output() viewDetailEvent = new EventEmitter<{ name: string, age: number, enrollmentDate: Date }>();

  // Émet un événement pour afficher les détails de l'étudiant
  viewDetail(student: Student) {
    this.viewDetailEvent.emit(student);
  }

  // Émet un événement pour supprimer l'étudiant
  deleteStudent(index: number) {
    this.deleteStudentEvent.emit(index);
  }

}
