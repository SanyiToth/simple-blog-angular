import {Component, Input, OnInit} from '@angular/core';
import {CommentsService} from './comments.service';
import {Comment} from './comment.interface';
import {ActivatedRoute} from '@angular/router';
import {tap, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.css']
})
export class CommentContainerComponent implements OnInit {

  postId: number;
  comments: Comment[];
  errorMessage = '';


  constructor(private commentService: CommentsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.params
      .pipe(
        tap(params => {
            this.postId = params.id;
          }
        ),
        switchMap(() => this.commentService.getComments(this.postId)))
      .subscribe(response => {
        console.log('getComments(postId)', response);
        this.comments = response;
      }, error => {
        console.log('error', error);
        this.errorMessage = error;
      });


    /*this.route.params.subscribe(params => {
      this.postId = params.id;
      console.log('this.postId:', this.postId);
      this.commentService.getComments(this.postId)
        .subscribe(response => {
            console.log('getComments(postId)', response);
            this.comments = response;
          }, error => {
            console.log('error', error);
          }
        );
    });*/
  }

}
