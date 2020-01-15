import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {

  registForm :FormGroup;
  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.registForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      pswd: new FormControl('', [Validators.required, Validators.min(1)] ),
    });
  }

  Regist(){
    this.authService.regist(this.registForm.value.email, this.registForm.value.pswd);
  }

}
