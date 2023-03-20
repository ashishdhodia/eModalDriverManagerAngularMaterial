import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ESearchBarComponent } from './e-search-bar.component';

describe('ESearchBarComponent', () => {
  let component: ESearchBarComponent;
  let fixture: ComponentFixture<ESearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ESearchBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ESearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
