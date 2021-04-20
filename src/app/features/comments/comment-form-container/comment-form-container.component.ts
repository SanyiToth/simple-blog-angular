import {Component, Input, OnInit} from '@angular/core';
import {NewComment} from '../new-comment.interface';
import {CommentsService} from '../comments.service';

@Component({
  selector: 'app-comment-form-container',
  templateUrl: './comment-form-container.component.html',
  styleUrls: ['./comment-form-container.component.css']
})
export class CommentFormContainerComponent implements OnInit {
  @Input() postId: number;
  comment: NewComment;
  errorMessage;


  constructor(private commentService: CommentsService) {
  }

  setComment(newComment: NewComment): void {
    this.comment = newComment;
    console.log('this.comment', this.comment);
    this.commentService.postComments(this.comment)
      .subscribe(response => {
        console.log('postComments()', response);
      }, error => {
        console.log('error', error);
        this.errorMessage = error;
      });
  }


  ngOnInit(): void {
  }

}
