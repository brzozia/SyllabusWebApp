import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../course';


@Pipe({ name: 'filterPipe' })


export class filterPipe implements PipeTransform {

    transform(courses: Course[], courseFilter: Course): Course[] {
        if (!courses)
            return [];
        if (!courseFilter)
            return courses;


        return courses.filter(course => {
            let fl: boolean = true;
            if (courseFilter.name != '')
                fl =fl&& course.name.toLowerCase().includes(courseFilter.name.toLowerCase());
            if (courseFilter.semestr != null)
                 fl = fl &&(course.semestr==(courseFilter.semestr));
            if (courseFilter.ects != null)
                fl =fl && (course.ects==(courseFilter.ects));
            if (courseFilter.grade != null)
                fl = fl &&(course.grade==(courseFilter.grade));


            return fl;

        });
    }
}