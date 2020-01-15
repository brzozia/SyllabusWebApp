import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators, ValidatorFn} from '@angular/forms';
import { Course } from 'src/app/course';


@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})

export class NewCourseComponent implements OnInit{

@Output() newC = new EventEmitter();

  classesTypes=['Wykład', 'Ćwiczenia', 'Lab', 'Projektowe'];
  courseForm : FormGroup;
  newCourse: Course;


  constructor() { }

  ngOnInit() {
    this.courseForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      ects: new FormControl('', [Validators.required, Validators.min(1), Validators.max(15)] ),
      semestr: new FormControl('', [Validators.required, Validators.min(1), Validators.max(7)]),
      classes: new FormControl('',Validators.required),
      max_students: new FormControl('',[Validators.required, Validators.min(0)]),
      image: new FormControl(''),
      desc: new FormControl('')
    });
  }

  


  addCourse(){
    this.newCourse=new Course;
    
    this.newCourse.name=this.courseForm.value.name;
    this.newCourse.ects=this.courseForm.value.ects;
    this.newCourse.semestr=this.courseForm.value.semestr;
    this.newCourse.classes=this.courseForm.value.classes;
    this.newCourse.max_student=this.courseForm.value.max_students;
    this.newCourse.image=this.courseForm.value.image;
    this.newCourse.desc=this.courseForm.value.desc;
    this.newCourse.grade=0;


    this.newC.emit(this.newCourse);
    this.courseForm.reset()


  }
  

}
