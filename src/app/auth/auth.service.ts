import { Injectable } from '@angular/core';
import { User } from 'firebase';
import { Observable } from 'rxjs/index';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: Observable<firebase.User>;

  readonly authState$: Observable<User | null> = this.fireAuth.authState;

  constructor(public router: Router, public fireAuth: AngularFireAuth) {
    this.userData = fireAuth.authState;
    fireAuth.authState.subscribe();
    
  }

  

  getUser(): User | null {
    return this.fireAuth.auth.currentUser;
  }

  isLoggedIn(): boolean {
   
    return this.getUser() != null;
  }

  isAdmin(): boolean {
    console.log(localStorage.getItem('user'));
    if (localStorage.getItem('user') == 'admin@gmail.com'){
      return true;
    }
    else if (this.isLoggedIn()) {
        return (this.getUser().email == 'admin@gmail.com');
    }
    else {
      return false;
    }
  }
  signIn(email:string, password) {
    const session = firebase.auth.Auth.Persistence.SESSION;
    localStorage.setItem('user', email);
    console.log(localStorage.getItem('user'));

    return this.fireAuth.auth.setPersistence(session).then(() =>
      this.fireAuth.auth.signInWithEmailAndPassword(email, password).
        then(
           () => { 
           this.router.navigate(['search']);})
        .catch(err => { window.alert(err.message); }));
  }
  signOut() {
    return this.fireAuth.auth.signOut().then(() => { 
       localStorage.removeItem('user');
       this.router.navigate(['login']); });
  }

  regist(email, password) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password).then(() => this.router.navigate(['search']))
      .catch(err => { window.alert(err.message) });;
  }

}