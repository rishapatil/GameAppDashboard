import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddDeviceComponent } from './admin-add-device.component';

describe('AdminAddDeviceComponent', () => {
  let component: AdminAddDeviceComponent;
  let fixture: ComponentFixture<AdminAddDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
