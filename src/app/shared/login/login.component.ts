import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';
import {ErrorMessage} from '@angular/compiler-cli/ngcc/src/execution/cluster/api';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'
  ]
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  }

  loginForm: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]]
  });
  errorMessage: ErrorMessage;

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.loginForm.value);
    this.authService
      .login(this.loginForm.value)
      .subscribe(resp => {
          console.log('resp', resp);
          this.router.navigate(['/admin']);
          this.loginForm.reset();
        }, (error: ErrorMessage) => {
          this.errorMessage = error;
          console.log(this.errorMessage);
          this.loginForm.reset();
        }
      );
  }

  get email(): AbstractControl | null {
    return this.loginForm.get('email');
  }

  get password(): AbstractControl | null {
    return this.loginForm.get('password');
  }

}
