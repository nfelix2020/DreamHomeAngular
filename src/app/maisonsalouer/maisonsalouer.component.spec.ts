import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonsalouerComponent } from './maisonsalouer.component';

describe('MaisonsalouerComponent', () => {
  let component: MaisonsalouerComponent;
  let fixture: ComponentFixture<MaisonsalouerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaisonsalouerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisonsalouerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
