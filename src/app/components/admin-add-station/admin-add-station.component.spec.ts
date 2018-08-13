import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddStationComponent } from './admin-add-station.component';

describe('AdminAddStationComponent', () => {
  let component: AdminAddStationComponent;
  let fixture: ComponentFixture<AdminAddStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
