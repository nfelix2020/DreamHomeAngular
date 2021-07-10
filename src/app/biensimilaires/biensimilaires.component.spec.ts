import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiensimilairesComponent } from './biensimilaires.component';

describe('BiensimilairesComponent', () => {
  let component: BiensimilairesComponent;
  let fixture: ComponentFixture<BiensimilairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiensimilairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiensimilairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
