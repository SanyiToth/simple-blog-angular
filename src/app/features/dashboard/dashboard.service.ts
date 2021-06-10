import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Post} from '../posts/post.interface';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  static readonly ADMIN_API_PATH = '/posts';

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.API_URL + '/640' + DashboardService.ADMIN_API_PATH);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(environment.API_URL + DashboardService.ADMIN_API_PATH + `/${id}`);
  }
}
