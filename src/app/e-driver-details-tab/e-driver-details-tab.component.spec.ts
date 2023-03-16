import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDriverDetailsTabComponent } from './e-driver-details-tab.component';

describe('EDriverDetailsTabComponent', () => {
  let component: EDriverDetailsTabComponent;
  let fixture: ComponentFixture<EDriverDetailsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EDriverDetailsTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EDriverDetailsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
