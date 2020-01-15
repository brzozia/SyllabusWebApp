import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../course';
import {COURSES} from '../mock-courses'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  getCourses(): Observable<Course[]> {
    return of (COURSES);
  }

  getCourse(id: number): Observable<Course> {
    return of(COURSES.find(course => course.id === id));
  }

  addCourse(course: Course): Observable<Course[]>{
    let i = (COURSES.push(course));
    course.id=COURSES[i-1].id +1;
    return this.getCourses()
  }

  deleteCourse(course:Course): Observable<Course[]>{
      COURSES.splice(COURSES.indexOf(course), 1);
      return this.getCourses();
  }

  gradeCourse(id:number, grade: number): Observable<Course>{
    let course: Course=COURSES.find(course => course.id === id);
    
    let oldGrade =course.grade;
    let noOfUsers: number=course.graders.length;
    let oldSum: number=oldGrade*(noOfUsers); 
    let newSum=oldSum+grade;

    noOfUsers=noOfUsers+1.0;

    course.grade=newSum/noOfUsers;

    return of(course);
  }

  editCourse(editForm: FormGroup,id:number): Observable<Course>{
    let course: Course=COURSES.find(course => course.id === id);

    if(editForm.value.name!='')
    course.name=editForm.value.name;
    if(editForm.value.ects!='')
    course.ects=editForm.value.ects;
    if(editForm.value.semestr!='')
    course.semestr=editForm.value.semestr;
    if(editForm.value.max_students!='')
    course.max_student=editForm.value.max_students;
    if(editForm.value.image!='')
    course.image=editForm.value.image;
    if(editForm.value.desc!='')
    course.desc=editForm.value.desc;
    if(editForm.value.grade!='')
    course.grade=editForm.value.grade;

  return of(course);
  }

  addAttender(course:Course,name:string): Observable<Course>{
    course.attenders.push(name);
    return of(course);
  }

  addGrader(course:Course,name:string): Observable<Course>{
    course.graders.push(name);
    return of(course);
  }
















  // getCourses(): Observable<Course[]> {
    
  //   return this.http.get<Course[]>(this.coursesUrl);
  // }

  // getCourse(id: number): Observable<Course> {
  //   return of(COURSES.find(course => course.id === id));
    
  //   // --> wersja http ktora nie chche działać --> const url = `${this.coursesUrl}/?id=${id}`;
  //   // return this.http.get<Course>(url);
    
  //   //filter(c => c.id === c);
  // }

//   deleteCourse (course: Course | number): Observable<Course> {
//     const id = typeof course === 'number' ? course : course.id;
//     const url = `${this.coursesUrl}/${id}`;
//     //const n = `${this.coursesUrl}/${name}`;
  
//     return this.http.delete<Course>(url, this.httpOptions);
//   }


// searchCourses(term: string): Observable<Course[]> {
//   if (!term.trim()) {
//     // if not search term, return empty hero array.
//     return of([]);
//   }
//   return this.http.get<Course[]>(`${this.coursesUrl}/?name=${term}`).pipe(
//     //tap(_ => this.log(`found course matching "${term}"`)),
//     //catchError(this.handleError<Course[]>('searchCourse', []))
//   );
// }


}
