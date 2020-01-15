import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import{Course} from '../../course';
import { ActivatedRoute } from '@angular/router';
import { CourseService }  from '../../services/course.service';
import {AuthService} from '../../auth/auth.service'




@Component({
  selector: 'app-one-course',
  templateUrl: './one-course.component.html',
  styleUrls: ['./one-course.component.css']
})


export class OneCourseComponent implements OnInit {

@Input() course: Course;
@Output() eventDelete = new EventEmitter();

  constructor(    
    public authService: AuthService,
    private courseService: CourseService
    ) { }

    ngOnInit(): void {
    }

}
