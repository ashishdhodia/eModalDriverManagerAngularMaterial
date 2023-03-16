import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDriverListComponent } from './e-driver-list.component';

describe('EDriverListComponent', () => {
  let component: EDriverListComponent;
  let fixture: ComponentFixture<EDriverListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EDriverListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EDriverListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
