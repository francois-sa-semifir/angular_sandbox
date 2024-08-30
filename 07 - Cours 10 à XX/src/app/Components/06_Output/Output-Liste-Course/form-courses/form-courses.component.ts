import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-courses',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-courses.component.html',
  styleUrl: './form-courses.component.css'
})
export class FormCoursesComponent {

  @Output()

  onAddArticle: EventEmitter<any> = new EventEmitter();

  article: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.article = this.formBuilder.group({
      designation: ['', Validators.required],
      prix: ['', Validators.required],
    });
  }

  private resetForm(): void {
    this.article.reset();
    this.submitted = false;
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.article.valid) {
      this.onAddArticle.emit(this.article.value);
      this.resetForm();
    } else {
      console.log('Formulaire invalide');
    }
  }

  get form() {
    return this.article.controls;
  }
}
