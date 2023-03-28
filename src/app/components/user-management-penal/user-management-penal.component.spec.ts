import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementPenalComponent } from './user-management-penal.component';

describe('UserManagementPenalComponent', () => {
  let component: UserManagementPenalComponent;
  let fixture: ComponentFixture<UserManagementPenalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserManagementPenalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserManagementPenalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
