import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDriverDetailsTopComponent } from './e-driver-details-top.component';

describe('EDriverDetailsTopComponent', () => {
  let component: EDriverDetailsTopComponent;
  let fixture: ComponentFixture<EDriverDetailsTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EDriverDetailsTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EDriverDetailsTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
