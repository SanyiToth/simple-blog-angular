import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ContactFormMessage} from './contact-form-message.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  initialValues: ContactFormMessage = {
    name: '',
    email: '',
    message: '',
    acceptedTermsAndConditions: false
  };

  contactFormMessage: ContactFormMessage;

  constructor() {
  }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm): void {
    this.contactFormMessage = {
      name: form.value.nameField,
      email: form.value.emailField,
      message: form.value.textareaField,
      acceptedTermsAndConditions: form.value.acceptField
    };
    console.log('contactformmessage', this.contactFormMessage);
  }
}
