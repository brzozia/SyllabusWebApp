import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Course } from 'src/app/course';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CourseService } from '../../services/course.service';
import { FirestoreServiceService } from '../../services/firestore-service.service'
import { AuthService } from '../../auth/auth.service'

@Component({
  selector: 'app-course-item1',
  templateUrl: './course-item1.component.html',
  styleUrls: ['./course-item1.component.css']
})
export class CourseItem1Component implements OnInit {

  course: Course;
  starStatus = [false, false, false, false, false];
  gradeStatus = [false, false, false, false, false];


  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private fireservice: FirestoreServiceService,
    public authService: AuthService,
    private location: Location
  ) { }



  ngOnInit(): void {
    this.getCourse();
    this.fullfillGradeStatus();
  }

  getCourse(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.courseService.getCourse(id)
      .subscribe(course => this.course = course);
    // this.fireservice.getCourse(id);
  }

  goBack(): void {
    this.location.back();
  }


  fullfillGradeStatus() {
    this.gradeStatus = [false, false, false, false, false];

    let grade = this.course.grade;
    let i = 0;
    while (i < grade) {
      this.gradeStatus[i] = true;
      i++;

    }
  }


  grade2(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    let grade = 0;
    while (grade < 5 && this.starStatus[grade] == true) {
      grade++;
    }

    this.courseService.gradeCourse(id, grade).subscribe(course => this.course = course);
this.fullfillGradeStatus();

    this.courseService.addGrader(this.course, this.authService.getUser().email).subscribe(course => this.course = course);

    // this.fireservice.gradeCourse(id,grade)
  }

  isdisabledGrade() {
    if (this.authService.isLoggedIn() && this.course.graders.includes(this.authService.getUser().email))
      return true;
    else
      return false;
  }

  isDisabledJoin() {
    if (this.course.max_student == 0) {
      return true;
    }
    else if (this.authService.isLoggedIn() && this.course.attenders.includes(this.authService.getUser().email))
      return true;
    else
      return false;
  }

  changeClick(i: number) {

    while (i < 4 && this.starStatus[i + 1] == true) {
      i++;
    }

    for (let k = 0; k <= i; k++)
      this.starStatus[k] = !this.starStatus[i];
  }

  chooseCourse() {
    if (this.course.max_student > 0) {
      this.course.max_student -= 1;
      this.courseService.addAttender(this.course, this.authService.getUser().email).subscribe(course => this.course = course);
    }
  }

  choosedCourse() {
    return (this.authService.isLoggedIn() && this.course.attenders.includes(this.authService.getUser().email) && !this.course.graders.includes(this.authService.getUser().email));

  }




}
