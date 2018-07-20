import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullYearCalendarComponent } from './full-year-calendar.component';

describe('FullYearCalendarComponent', () => {
  let component: FullYearCalendarComponent;
  let fixture: ComponentFixture<FullYearCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullYearCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullYearCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
