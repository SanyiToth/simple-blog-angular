import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from '../interfaces/comment.interface';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  static readonly API_URL = `http://localhost:3000/comments`;


  constructor(private http: HttpClient) {
  }

  getComments(postId: number | undefined): Observable<Comment[ ]> {
    return this.http.get<Comment[]>(CommentsService.API_URL + '?_sort=id&_order=desc&postId=' + postId);
  }
}
