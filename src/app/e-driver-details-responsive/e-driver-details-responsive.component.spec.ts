import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDriverDetailsResponsiveComponent } from './e-driver-details-responsive.component';

describe('EDriverDetailsResponsiveComponent', () => {
  let component: EDriverDetailsResponsiveComponent;
  let fixture: ComponentFixture<EDriverDetailsResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EDriverDetailsResponsiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EDriverDetailsResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
