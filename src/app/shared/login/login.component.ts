import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';

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
  errorMessage = '';

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value)
      .subscribe(resp => {
          console.log('resp', resp);
          this.router.navigate(['/admin']);
          this.loginForm.reset();
        }, error => {
          this.errorMessage = error;
          this.loginForm.reset();
        }
      )
    ;
  }
}
