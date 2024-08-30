import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-courses',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './liste-courses.component.html',
  styleUrl: './liste-courses.component.css'
})
export class ListeCoursesComponent {
  articles: string[] = []

  newArticle!:string

  addArticle() {
    this.articles.push(this.newArticle)
    this.newArticle = ''
  }
}