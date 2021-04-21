import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {NewComment} from '../new-comment.interface';


@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  @Output() commentToParent = new EventEmitter<NewComment>();

  myForm: FormGroup = new FormGroup({
    name: new FormGroup({
      firstName: new FormControl(null,
        [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl(null,
        [Validators.required, Validators.minLength(3)])
    }),
    email: new FormControl(null,
      [Validators.required, Validators.email]),
    body: new FormControl(null,
      [Validators.required, Validators.minLength(100)]),
    acceptedTermsAndConditions: new FormControl(false,
      Validators.requiredTrue)
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('this.myForm.value', this.myForm.value);
    this.commentToParent.emit(this.myForm.value);
    this.myForm.reset();
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
    return this.myForm.get('body');
  }

  get terms(): AbstractControl | null {
    return this.myForm.get('acceptedTermsAndConditions');
  }
}
