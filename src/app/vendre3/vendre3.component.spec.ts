import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vendre3Component } from './vendre3.component';

describe('Vendre3Component', () => {
  let component: Vendre3Component;
  let fixture: ComponentFixture<Vendre3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vendre3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vendre3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
