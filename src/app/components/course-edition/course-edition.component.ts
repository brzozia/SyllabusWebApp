import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Course } from 'src/app/course';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-edition',
  templateUrl: './course-edition.component.html',
  styleUrls: ['./course-edition.component.css']
})
export class CourseEditionComponent implements OnInit {

  @Output() eventDelete = new EventEmitter();

  classesTypes = ['Wykład', 'Ćwiczenia', 'Lab', 'Projektowe'];
  editForm: FormGroup;
  course: Course;
  gradeStatus = [false, false, false, false, false];


  constructor(private route: ActivatedRoute,
    private courseService: CourseService,
    private location: Location,
    private router: Router,) { }

  ngOnInit() {
    this.editForm = new FormGroup({
      name: new FormControl('', [Validators.minLength(3)]),
      ects: new FormControl('', [Validators.min(1), Validators.max(15)]),
      semestr: new FormControl('', [Validators.min(1), Validators.max(7)]),
      classes: new FormControl(''),
      max_students: new FormControl('', [Validators.min(0)]),
      image: new FormControl(''),
      desc: new FormControl(''),
      grade: new FormControl('', [Validators.min(0), Validators.max(5)])
    });
    this.getCourse();
    this.fullfillGradeStatus();
  }

  getCourse(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.courseService.getCourse(id)
      .subscribe(course => this.course = course);
  }

  goBack(): void {
    this.location.back();
  }


  fullfillGradeStatus() {
    let grade = this.course.grade;
    let i = 0;
    while (i < grade) {
      this.gradeStatus[i] = true;
      i++;

    }
  }

  editCourse() {
    this.courseService.editCourse(this.editForm, this.course.id).subscribe(course => this.course = course);
    this.fullfillGradeStatus();
  }

}
