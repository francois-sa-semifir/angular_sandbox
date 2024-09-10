import { Component } from '@angular/core';
import { FormCoursesComponent } from '../form-courses/form-courses.component'

@Component({
  selector: 'app-data-courses',
  standalone: true,
  imports: [FormCoursesComponent],
  templateUrl: './data-courses.component.html',
  styleUrl: './data-courses.component.css'
})
export class DataCoursesComponent {

  // On déclare une liste vide de courses qui sera remplie avec le formulaire
  courses: any[] = [];

  // On définit la méthode pour ajouter un article
  addCourse(course: any) {
    this.courses.push(course);
  }

  // On définit un getter pour afficher le total
  get total() {
    return this.courses.reduce((total, current) => total + current.prix, 0);
  }
}
