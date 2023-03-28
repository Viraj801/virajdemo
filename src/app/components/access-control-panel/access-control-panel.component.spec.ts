import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessControlPanelComponent } from './access-control-panel.component';

describe('AccessControlPanelComponent', () => {
  let component: AccessControlPanelComponent;
  let fixture: ComponentFixture<AccessControlPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessControlPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
