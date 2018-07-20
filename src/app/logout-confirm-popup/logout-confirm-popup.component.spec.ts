import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutConfirmPopupComponent } from './logout-confirm-popup.component';

describe('LogoutConfirmPopupComponent', () => {
  let component: LogoutConfirmPopupComponent;
  let fixture: ComponentFixture<LogoutConfirmPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutConfirmPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutConfirmPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
