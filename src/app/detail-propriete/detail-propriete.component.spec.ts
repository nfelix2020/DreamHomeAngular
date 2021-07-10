import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProprieteComponent } from './detail-propriete.component';

describe('DetailProprieteComponent', () => {
  let component: DetailProprieteComponent;
  let fixture: ComponentFixture<DetailProprieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProprieteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProprieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
