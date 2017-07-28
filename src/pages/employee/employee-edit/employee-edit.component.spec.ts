import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { employeeEditComponent } from './employee-edit.component';

describe('employeeEditComponent', () => {
  let component: employeeEditComponent;
  let fixture: ComponentFixture<employeeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ employeeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(employeeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
