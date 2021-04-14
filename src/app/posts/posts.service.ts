import {Injectable} from '@angular/core';
import {Post} from 'src/app/posts/post.interface';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
   static readonly API_URL = `http://localhost:3000/posts`;

  constructor(private http: HttpClient) {
  }

  getPosts(limit: number = 10): Observable<Post[]> {
    return this.http.get<Post[]>(PostsService.API_URL + '?_limit=' + limit);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(PostsService.API_URL + '/' + id);
  }


}
