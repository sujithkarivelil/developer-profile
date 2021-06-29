import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduHighlightComponent } from './edu-highlight.component';

describe('EduHighlightComponent', () => {
  let component: EduHighlightComponent;
  let fixture: ComponentFixture<EduHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduHighlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EduHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
