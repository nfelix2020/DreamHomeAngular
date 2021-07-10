import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Appart1Component } from './appart1.component';

describe('Appart1Component', () => {
  let component: Appart1Component;
  let fixture: ComponentFixture<Appart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Appart1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Appart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
