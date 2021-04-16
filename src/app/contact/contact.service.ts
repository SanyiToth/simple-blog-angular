import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ContactFormMessage} from './contact-form-message.interface';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  static readonly API_URL = `http://localhost:3000/contactFormMessagess`;

  constructor(private http: HttpClient) {
  }

  /*getMessage(): Observable<ContactFormMessage> {
    return this.http.get<ContactFormMessage>(ContactService.API_URL);
  }*/

  sendMessage(message: ContactFormMessage): Observable<ContactFormMessage> {
    return this.http.post<ContactFormMessage>(ContactService.API_URL, message);
  }
}
