import {Component, Input, OnInit} from '@angular/core';
import {CommentsService} from './comments.service';
import {Comment} from './comment.interface';

@Component({
  selector: 'app-comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.css']
})
export class CommentContainerComponent implements OnInit {

  @Input() postId;
  comments: Comment[];
  errorMessage = '';


  constructor(private commentService: CommentsService) {
  }

  ngOnInit(): void {
    console.log('this.postId:', this.postId);
    this.commentService.getComments(this.postId)
      .subscribe(response => {
          console.log('getComments(postId)', response);
          this.comments = response;
        }, error => {
          console.log('error', error);
        }
      );
  }

}
