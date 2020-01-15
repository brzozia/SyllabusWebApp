import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../services/course.service';
import {filterPipe} from './filterPipe.pipe'
import { FirestoreServiceService } from '../services/firestore-service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  
  courses: Course[];
  courseFilter : Course;

  constructor(private courseService: CourseService,
    private fireservice: FirestoreServiceService,
    ) { }

  ngOnInit() {
   this.getCourses();
  }

  getCourses() {
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses);

      // this.courses=<Course[]> <unknown> this.fireservice.getCourses();
  }

  filterCourse(course: Course){
    this.courseFilter=course;

  }
}