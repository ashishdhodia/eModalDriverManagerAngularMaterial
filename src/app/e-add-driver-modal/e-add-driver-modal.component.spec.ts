import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EAddDriverModalComponent } from './e-add-driver-modal.component';

describe('EAddDriverModalComponent', () => {
  let component: EAddDriverModalComponent;
  let fixture: ComponentFixture<EAddDriverModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EAddDriverModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EAddDriverModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
