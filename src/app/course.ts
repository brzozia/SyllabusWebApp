export class Course {
  image?:string;
  id: number;
  name: string;
  ects: number;
  semestr: number;
  classes: string; //(9 wykład, ćwiczenia, lab, projekt),
  max_student: number; //kazdy kurs jest obieralny
  grade?: number; //ocena kursu od 1 do 5
  desc?: string;
  attenders?: string[];
  graders?: string[];

}