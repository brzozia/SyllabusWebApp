import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCourseEditionComponent } from './one-course-edition.component';

describe('OneCourseEditionComponent', () => {
  let component: OneCourseEditionComponent;
  let fixture: ComponentFixture<OneCourseEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneCourseEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneCourseEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
