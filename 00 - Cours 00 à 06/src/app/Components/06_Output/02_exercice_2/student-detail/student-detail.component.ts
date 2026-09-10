import { Component, input } from '@angular/core';
// Import des pipes pour le formatage dans le template
import { DatePipe, UpperCasePipe } from '@angular/common';
import type { Student } from '../student-list/student-list.component';

@Component({
    selector: 'student-detail',
    imports: [DatePipe, UpperCasePipe],
    templateUrl: './student-detail.component.html',
    styleUrl: './student-detail.component.css'
})
export class StudentDetailComponent {
  
  // Reçoit les détails de l'étudiant depuis le parent (StudentMainComponent)
  readonly student = input<Student | null>(null);
}
