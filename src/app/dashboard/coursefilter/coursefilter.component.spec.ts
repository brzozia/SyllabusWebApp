import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursefilterComponent } from './coursefilter.component';

describe('CoursefilterComponent', () => {
  let component: CoursefilterComponent;
  let fixture: ComponentFixture<CoursefilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursefilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursefilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
