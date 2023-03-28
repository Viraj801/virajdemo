import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraccesscontrolpanelComponent } from './useraccesscontrolpanel.component';

describe('UseraccesscontrolpanelComponent', () => {
  let component: UseraccesscontrolpanelComponent;
  let fixture: ComponentFixture<UseraccesscontrolpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseraccesscontrolpanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseraccesscontrolpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
