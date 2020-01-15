import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItem1Component } from './course-item1.component';

describe('CourseItem1Component', () => {
  let component: CourseItem1Component;
  let fixture: ComponentFixture<CourseItem1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItem1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
