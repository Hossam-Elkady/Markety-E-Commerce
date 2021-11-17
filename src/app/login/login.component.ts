import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private _Router: Router, private _AuthService: AuthService) { }

  ngOnInit(): void { }

  message: string = '';

  registered: boolean = false;

  userName: string = "";

  signinForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
    ]),
  });

  submit() {
    if (this.signinForm.invalid) {
      return;
    }
    this._AuthService.signIn(this.signinForm.value).subscribe((res) => {
      if (res.message == 'success') {
        this.userName = res.user.first_name;
        
        this._AuthService.getUserName(this.userName)
        this.registered = false;
        this._Router.navigateByUrl('home');
      }
      else {
        this.message = res.message;
        this.registered = true;
      }
    });
  }
}
