import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbuilderListeCoursesComponent } from './formbuilder-liste-courses.component';

describe('FormbuilderListeCoursesComponent', () => {
  let component: FormbuilderListeCoursesComponent;
  let fixture: ComponentFixture<FormbuilderListeCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormbuilderListeCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormbuilderListeCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
