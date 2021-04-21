import {Component, Input, OnInit} from '@angular/core';
import {NewComment} from '../new-comment.interface';
import {CommentsService} from '../comments.service';
import {CommentContainerComponent} from '../comments-container/comment-container.component';

@Component({
  selector: 'app-comment-form-container',
  templateUrl: './comment-form-container.component.html',
  styleUrls: ['./comment-form-container.component.css']
})
export class CommentFormContainerComponent implements OnInit {
  @Input() postId: number;
  comment: NewComment;
  errorMessage = '';
  successAlert = false;


  constructor(private commentService: CommentsService) {
  }

  setComment(newComment: NewComment): void {
    this.comment = {
      name: newComment.name,
      email: newComment.email,
      body: newComment.body,
      postId: this.postId,
      acceptedTermsAndConditions: newComment.acceptedTermsAndConditions
    };
    this.comment.postId = this.postId;
    console.log('this.comment', this.comment);
    this.commentService.postComments(this.comment)
      .subscribe(response => {
        console.log('postComments()', response);
        this.successAlert = true;
      }, error => {
        console.log('error', error);
        this.errorMessage = error;
      });
  }


  ngOnInit(): void {
  }

}
