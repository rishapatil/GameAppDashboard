import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditDeviceComponent } from './admin-edit-device.component';

describe('AdminEditDeviceComponent', () => {
  let component: AdminEditDeviceComponent;
  let fixture: ComponentFixture<AdminEditDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
