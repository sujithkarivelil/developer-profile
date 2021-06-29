import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDataTileComponent } from './personal-data-tile.component';

describe('PersonalDataTileComponent', () => {
  let component: PersonalDataTileComponent;
  let fixture: ComponentFixture<PersonalDataTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDataTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDataTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
