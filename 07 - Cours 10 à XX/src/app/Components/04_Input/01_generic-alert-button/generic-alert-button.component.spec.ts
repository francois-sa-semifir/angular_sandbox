import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericAlertButtonComponent } from './generic-alert-button.component';

describe('GenericAlertButtonComponent', () => {
  let component: GenericAlertButtonComponent;
  let fixture: ComponentFixture<GenericAlertButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericAlertButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericAlertButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
