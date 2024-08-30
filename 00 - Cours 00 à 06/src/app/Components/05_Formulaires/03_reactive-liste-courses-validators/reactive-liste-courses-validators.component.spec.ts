import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveListeCoursesValidatorsComponent } from './reactive-liste-courses-validators.component';

describe('ReactiveListeCoursesValidatorsComponent', () => {
  let component: ReactiveListeCoursesValidatorsComponent;
  let fixture: ComponentFixture<ReactiveListeCoursesValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveListeCoursesValidatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveListeCoursesValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
