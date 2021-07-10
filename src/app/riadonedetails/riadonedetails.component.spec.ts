import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiadonedetailsComponent } from './riadonedetails.component';

describe('RiadonedetailsComponent', () => {
  let component: RiadonedetailsComponent;
  let fixture: ComponentFixture<RiadonedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiadonedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiadonedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
