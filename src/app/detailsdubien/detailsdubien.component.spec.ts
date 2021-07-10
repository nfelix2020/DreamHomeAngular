import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsdubienComponent } from './detailsdubien.component';

describe('DetailsdubienComponent', () => {
  let component: DetailsdubienComponent;
  let fixture: ComponentFixture<DetailsdubienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsdubienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsdubienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
