import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { Student } from '../student-list/student-list.component';

@Component({
    selector: 'student-detail',
    imports: [CommonModule],
    templateUrl: './student-detail.component.html',
    styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent {
  
  // Reçoit les détails de l'étudiant depuis le parent (StudentMainComponent)
  @Input() student: Student | null = null;
}
