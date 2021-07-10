import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Louer2Component } from './louer2.component';

describe('Louer2Component', () => {
  let component: Louer2Component;
  let fixture: ComponentFixture<Louer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Louer2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Louer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
