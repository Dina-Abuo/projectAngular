import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMasterComponent } from './order-master.component';

describe('OrderMasterComponent', () => {
  let component: OrderMasterComponent;
  let fixture: ComponentFixture<OrderMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderMasterComponent]
    });
    fixture = TestBed.createComponent(OrderMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
