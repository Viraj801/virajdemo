import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpermissionpanelComponent } from './userpermissionpanel.component';

describe('UserpermissionpanelComponent', () => {
  let component: UserpermissionpanelComponent;
  let fixture: ComponentFixture<UserpermissionpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserpermissionpanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserpermissionpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
