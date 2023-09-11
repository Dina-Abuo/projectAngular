import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UerRegisterComponent } from './uer-register.component';

describe('UerRegisterComponent', () => {
  let component: UerRegisterComponent;
  let fixture: ComponentFixture<UerRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UerRegisterComponent]
    });
    fixture = TestBed.createComponent(UerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
