import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { employeeItemComponent } from './employee-item.component';

describe('employeeItemComponent', () => {
  let component: employeeItemComponent;
  let fixture: ComponentFixture<employeeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ employeeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(employeeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
