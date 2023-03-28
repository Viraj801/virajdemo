import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserPanelComponent } from './update-user-panel.component';

describe('UpdateUserPanelComponent', () => {
  let component: UpdateUserPanelComponent;
  let fixture: ComponentFixture<UpdateUserPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUserPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUserPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
