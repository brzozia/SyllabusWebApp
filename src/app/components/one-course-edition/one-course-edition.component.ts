import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import{Course} from '../../course';
import { ActivatedRoute } from '@angular/router';
import { CourseService }  from '../../services/course.service';
import {AuthService} from '../../auth/auth.service'




@Component({
  selector: 'app-one-course-edition',
  templateUrl: './one-course-edition.component.html',
  styleUrls: ['./one-course-edition.component.css']
})


export class OneCourseEditionComponent implements OnInit {

@Input() course: Course;
@Output() eventDeleteE = new EventEmitter();

  constructor(    
    public authService: AuthService,
    private courseService: CourseService
    ) { }

    ngOnInit(): void {
    }

}
