import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCourseComponent } from './one-course.component';

describe('OneCourseComponent', () => {
  let component: OneCourseComponent;
  let fixture: ComponentFixture<OneCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
