import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserPanelComponent } from './create-user-panel.component';

describe('CreateUserPanelComponent', () => {
  let component: CreateUserPanelComponent;
  let fixture: ComponentFixture<CreateUserPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
