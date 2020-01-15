import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './components/course-list/course.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { RegistComponent } from '../app/auth/regist/regist.component';
import { CourseItem1Component } from './components/course-details/course-item1.component';
import { PageNotFoundComponentComponent} from './components/page-not-found-component/page-not-found-component.component';
import { LoginComponent } from './auth/login/login.component';
import { CourseEditionComponent } from './components/course-edition/course-edition.component';
import { AuthGuard } from './auth/guard/auth.guard';



const routes: Routes = [
  { path: 'courses', component: CourseComponent, canActivate: [AuthGuard] },
  { path: 'search', component: DashboardComponent },
  { path: 'detail/:id', component: CourseItem1Component },
  { path: 'edit/:id', component: CourseEditionComponent, canActivate: [AuthGuard] },
  { path: 'regist', component: RegistComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponentComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
