import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  initialValues = {
    name: '',
    email: '',
    textarea: ''
  };

  constructor() {
  }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm): void {
    console.log('form', form);
    console.log('form.value', form.value);
  }
}
