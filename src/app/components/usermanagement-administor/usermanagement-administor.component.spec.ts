import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanagementAdministorComponent } from './usermanagement-administor.component';

describe('UsermanagementAdministorComponent', () => {
  let component: UsermanagementAdministorComponent;
  let fixture: ComponentFixture<UsermanagementAdministorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsermanagementAdministorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsermanagementAdministorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
