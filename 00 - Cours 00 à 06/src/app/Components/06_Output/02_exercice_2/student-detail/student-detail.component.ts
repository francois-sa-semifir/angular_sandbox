import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'student-detail',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent {
  
  // Reçoit les détails de l'étudiant depuis le parent (StudentMainComponent)
  @Input() student: { name: string, age: number, enrollmentDate: Date } | null = null;
}
