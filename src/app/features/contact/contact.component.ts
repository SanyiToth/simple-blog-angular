import {Component, OnInit} from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';
import {ContactFormMessage} from './contact-form-message.interface';
import {ContactService} from './contact.service';

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
  errorMessage = '';
  successAlert = false;
  errorAlert = false;

  contactFormMessage: ContactFormMessage;

  constructor(private contactService: ContactService) {
  }

  ngOnInit(): void {

  }

  checkErrorMessage(): void {
    if (this.errorMessage === '') {
      this.successAlert = true;
    } else {
      this.errorAlert = true;
    }
  }

  onSubmit(form: NgForm): void {
    this.contactFormMessage = {
      name: form.value.nameField,
      email: form.value.emailField,
      message: form.value.textareaField,
      acceptedTermsAndConditions: form.value.acceptField
    };

    this.contactService.sendMessage(this.contactFormMessage).subscribe(response => {
      console.log('sendMessage()', response);
      this.checkErrorMessage();
      form.reset();
    }, errorMsg => {
      this.errorMessage = errorMsg;
      console.log('error', this.errorMessage);
      this.checkErrorMessage();
    });

  }

  closeErrorAlert(): void {
    this.errorAlert = false;
  }

}
