import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { AngularFirestoreModule } from 'angularfire2/firestore'; 
//  import { AngularFirestoreModule } from '@angular/fire/angularfire2'; 



import { AppRoutingModule } from '../app/app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './components/course-list/course.component';
import { CourseItem1Component } from './components/course-details/course-item1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewCourseComponent } from './components/new-course/new-course.component';
import { RegistComponent } from './auth/regist/regist.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { OneCourseComponent } from './dashboard/one-course/one-course.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CoursefilterComponent } from './dashboard/coursefilter/coursefilter.component';
import { filterPipe } from './dashboard/filterPipe.pipe'
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { LoginComponent } from './auth/login/login.component';
import { NavBarComponent } from './navbar/nav-bar.component';
import { CourseEditionComponent } from './components/course-edition/course-edition.component';
import { OneCourseEditionComponent } from './components/one-course-edition/one-course-edition.component';
import { FooterComponent } from './footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseItem1Component,
    DashboardComponent,
    NewCourseComponent,
    RegistComponent,
    OneCourseComponent,
    CoursefilterComponent,
    filterPipe,
    PageNotFoundComponentComponent,
    LoginComponent,
    NavBarComponent,
    CourseEditionComponent,
    OneCourseEditionComponent,
    FooterComponent


  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireAuthModule,
    // AngularFirestoreModule,
    FormsModule,
    NgbModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
