import { Component, OnInit } from '@angular/core';
import { Course } from '../../course';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: Course[];

  constructor(private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router,) { }


  getCourses(): void {
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses);
  }

  ngOnInit() {
    this.getCourses();

  }
  addCourse(course: Course){
    let id: number = this.courses[this.courses.length-1].id +1;
    course.id=id;
    this.courseService.addCourse(course).subscribe(courses => this.courses = courses);
  }

  deleteCourse(course: Course): void {
    this.courses = this.courses.filter(h => h !== course);
    this.courseService.deleteCourse(course).subscribe();
  }

}











  // addCourse(name: string, ects: number,semestr: number,classes: string,  max_student: number,image: string): void {
  //   name = name.trim();
  //   ects = ects;
  //   semestr = semestr;
  //   classes = classes.trim();
  //   max_student = max_student;
  //   image = image.trim();

  //   if (!name) { return; }
  //   this.courseService.addCourse({ name, ects, semestr, classes, max_student, image } as Course)
  //   .subscribe(course => {
  //     this.courses.push(course);
  //   });

  // }

  // onSelect(course: Course): void {
  //     this.selectedCourse = course;
  // }



