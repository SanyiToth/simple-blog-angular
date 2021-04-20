import {Component, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Comment} from 'src/app/features/comments/comment.interface';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  @Input() postId;
  @Output() comment;

  myForm: FormGroup = new FormGroup({
    firstName: new FormControl(null,
      [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl(null,
      [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null,
      [Validators.required, Validators.email]),
    comment: new FormControl(null,
      [Validators.required, Validators.minLength(100)]),
    acceptedTermsAndConditions: new FormControl(false,
      Validators.requiredTrue)
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.myForm.value);
  }

  get firstName(): AbstractControl | null {
    return this.myForm.get('firstName');
  }

  get lastName(): AbstractControl | null {
    return this.myForm.get('lastName');
  }

  get email(): AbstractControl | null {
    return this.myForm.get('email');
  }

  get message(): AbstractControl | null {
    return this.myForm.get('comment');
  }

  get terms(): AbstractControl | null {
    return this.myForm.get('acceptedTermsAndConditions');
  }
}
