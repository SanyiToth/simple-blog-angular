import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {AccessToken, LoginCredential, User} from './auth.interface';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private static API_URL = 'http://localhost:3000';
  private static PATH = '/login';

  constructor(private http: HttpClient) {
  }

  jwtSubject: BehaviorSubject<AccessToken> = new BehaviorSubject<AccessToken>(null);


  login(credentials: LoginCredential): Observable<AccessToken> {
    return this.http
      .post<AccessToken>(AuthService.API_URL + AuthService.PATH, credentials)
      .pipe(
        tap(token => {
          localStorage.setItem('jwt', JSON.stringify(token));
          this.jwtSubject.next(token);
        })
      );
  }

  logout(): void {
    this.jwtSubject.next(null);
  }


  isLoggedIn(): boolean {
    return !!this.jwtSubject.value;
  }


}
