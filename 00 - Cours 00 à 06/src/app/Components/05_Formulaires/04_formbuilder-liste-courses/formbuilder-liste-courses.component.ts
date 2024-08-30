import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formbuilder-liste-courses',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formbuilder-liste-courses.component.html',
  styleUrl: './formbuilder-liste-courses.component.css'
})

export class FormbuilderListeCoursesComponent {

  article: FormGroup;
  submitted: boolean = false;
  articles: any[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.article=this.formBuilder.group({
      designation: ['', Validators.required],
      prix: ['', Validators.required],
    });
  }

  private addArticle() {
      this.articles.push(this.article.value);
      this.article.reset();
      this.submitted = false;
  }

  onSubmit(): boolean {
    this.submitted = true;
    if (this.article.invalid) {
      return false;
    } else {
      this.addArticle();
      return true;
    }
  }

  get totalPrice(): number {
    return this.articles.reduce((total, article) => total + article.prix, 0);
  }

  get form() {
    return this.article.controls;
  }
}
