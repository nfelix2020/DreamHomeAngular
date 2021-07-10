import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vendre1Component } from './vendre1.component';

describe('Vendre1Component', () => {
  let component: Vendre1Component;
  let fixture: ComponentFixture<Vendre1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vendre1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vendre1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
