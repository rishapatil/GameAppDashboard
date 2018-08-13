import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddwinningnoComponent } from './admin-addwinningno.component';

describe('AdminAddwinningnoComponent', () => {
  let component: AdminAddwinningnoComponent;
  let fixture: ComponentFixture<AdminAddwinningnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddwinningnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddwinningnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
