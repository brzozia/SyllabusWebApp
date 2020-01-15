import { Injectable } from '@angular/core';
import { Course } from '../course';
// import { AngularFirestore } from 'angularfire2/firestore'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirestoreServiceService {

  constructor(
    // private firestore: AngularFirestore
    ) { }

  // getCourses() {
  //   return this.firestore.collection('courses').snapshotChanges();
  //  } 
   

  //  getCourse(id :number){
  //    return this.firestore.doc('courses/'+id).valueChanges();
  //  }

  //  addCourse(course: Course){
  //   return this.firestore.collection('courses').add(course);
  //  } 

  //  updateCourse(course: Course){
  //   delete course.id;
  //   this.firestore.doc('courses/' + course.id).update(course);
  //  } 

  //  deleteCourse(course: Course){
  //    let courseId=course.id;
  //   this.firestore.doc('courses/' + courseId).delete();
  //  } 


  //  gradeCourse(id:number, grade: number){
  //   let course=<Course> <unknown> this.firestore.doc('courses/'+id).valueChanges();

  //   let oldGrade =course.grade;
  //   var divider: number=2.0;
  //   if(oldGrade==0){
  //     divider=1;
  //   }
  //   let sum:number= (oldGrade-0)+(grade-0);
  //   course.grade =sum/divider;

  //   this.firestore.doc('courses/' + id).update(course);
  // }
}
