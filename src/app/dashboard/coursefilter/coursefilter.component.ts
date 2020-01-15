import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Course } from 'src/app/course';
import {CourseService } from '../../services/course.service'
import { Observable, Subject } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-coursefilter',
  templateUrl: './coursefilter.component.html',
  styleUrls: ['./coursefilter.component.css']
})


export class CoursefilterComponent implements OnInit {

  @Output() searchCourse = new EventEmitter();

  filterForm: FormGroup;


  constructor(private courseService: CourseService) { }


  ngOnInit() {
    this.filterForm = new FormGroup({
      name: new FormControl(''),
      ects: new FormControl(null,  [Validators.min(1), Validators.max(15)]),
      semestr: new FormControl(null, [Validators.min(1), Validators.max(7)]),
      grade: new FormControl(null, [Validators.min(0), Validators.max(5)])

    })
  }

  search(){
    let searchCourse=new Course;
    
    searchCourse.name=this.filterForm.value.name;
    searchCourse.ects=this.filterForm.value.ects;
    searchCourse.semestr=this.filterForm.value.semestr;
    searchCourse.grade=this.filterForm.value.grade;
    
    this.searchCourse.emit(searchCourse);
  }
}











