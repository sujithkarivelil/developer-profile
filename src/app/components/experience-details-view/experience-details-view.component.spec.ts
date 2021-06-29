import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDetailsViewComponent } from './experience-details-view.component';

describe('ExperienceDetailsViewComponent', () => {
  let component: ExperienceDetailsViewComponent;
  let fixture: ComponentFixture<ExperienceDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceDetailsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
