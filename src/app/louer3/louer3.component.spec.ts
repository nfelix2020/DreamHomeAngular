import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Louer3Component } from './louer3.component';

describe('Louer3Component', () => {
  let component: Louer3Component;
  let fixture: ComponentFixture<Louer3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Louer3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Louer3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
