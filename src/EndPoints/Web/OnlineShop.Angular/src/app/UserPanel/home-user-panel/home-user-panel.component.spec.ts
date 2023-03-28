import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUserPanelComponent } from './home-user-panel.component';

describe('HomeUserPanelComponent', () => {
  let component: HomeUserPanelComponent;
  let fixture: ComponentFixture<HomeUserPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeUserPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeUserPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
