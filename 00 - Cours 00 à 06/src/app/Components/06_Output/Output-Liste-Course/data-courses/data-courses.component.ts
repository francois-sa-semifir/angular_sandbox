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

  courses: any[] = [];

  addCourse(course: any) {
    this.courses.push(course);
  }

  get total() {
    return this.courses.reduce((total, current) => total + current.prix, 0);
  }
}
