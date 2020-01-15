import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm :FormGroup;
  constructor(public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      pswd: new FormControl('', [Validators.required] ),
    });
  }

  Login(){
    this.authService.signIn(this.loginForm.value.email, this.loginForm.value.pswd);
  }
}
