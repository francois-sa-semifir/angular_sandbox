import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HidderComponent } from './hidder.component';

describe('HidderComponent', () => {
  let component: HidderComponent;
  let fixture: ComponentFixture<HidderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HidderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HidderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
