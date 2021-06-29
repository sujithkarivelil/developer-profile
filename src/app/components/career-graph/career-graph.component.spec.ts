import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerGraphComponent } from './career-graph.component';

describe('CareerGraphComponent', () => {
  let component: CareerGraphComponent;
  let fixture: ComponentFixture<CareerGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
