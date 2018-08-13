import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditWinningnosComponent } from './admin-edit-winningnos.component';

describe('AdminEditWinningnosComponent', () => {
  let component: AdminEditWinningnosComponent;
  let fixture: ComponentFixture<AdminEditWinningnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditWinningnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditWinningnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
