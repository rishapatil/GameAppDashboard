import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWinningNosComponent } from './admin-winning-nos.component';

describe('AdminWinningNosComponent', () => {
  let component: AdminWinningNosComponent;
  let fixture: ComponentFixture<AdminWinningNosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWinningNosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWinningNosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
