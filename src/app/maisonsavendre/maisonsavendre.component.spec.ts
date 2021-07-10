import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonsavendreComponent } from './maisonsavendre.component';

describe('MaisonsavendreComponent', () => {
  let component: MaisonsavendreComponent;
  let fixture: ComponentFixture<MaisonsavendreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaisonsavendreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisonsavendreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
