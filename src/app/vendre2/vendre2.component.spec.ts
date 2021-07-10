import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vendre2Component } from './vendre2.component';

describe('Vendre2Component', () => {
  let component: Vendre2Component;
  let fixture: ComponentFixture<Vendre2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vendre2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vendre2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
