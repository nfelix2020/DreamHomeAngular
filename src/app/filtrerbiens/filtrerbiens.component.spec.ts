import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrerbiensComponent } from './filtrerbiens.component';

describe('FiltrerbiensComponent', () => {
  let component: FiltrerbiensComponent;
  let fixture: ComponentFixture<FiltrerbiensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrerbiensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrerbiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
