import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommentsService} from '../comments.service';
import {NewComment} from '../comment.interface';


@Component({
  selector: 'app-comment-form-container',
  templateUrl: './comment-form-container.component.html',
  styleUrls: ['./comment-form-container.component.css']
})
export class CommentFormContainerComponent implements OnInit {
  @Input() postId: number;
  @Output() response = new EventEmitter<NewComment>();
  comment: NewComment;
  errorMessage = '';
  successAlert = false;
  errorAlert = false;


  constructor(private commentService: CommentsService) {
  }

  setComment(newComment: NewComment): void {
    this.comment = newComment;
    this.comment.postId = this.postId;
    console.log('this.comment', this.comment);
    this.commentService.postComment(this.comment)
      .subscribe(response => {
        console.log('postComments()', response);
        this.response.emit(response);
        this.successAlert = true;
      }, error => {
        console.log('error', error);
        this.errorMessage = error;
        this.errorAlert = true;
      });
  }

  closeSuccessAlert(): void {
    this.successAlert = false;
  }

  closeErrorAlert(): void {
    this.errorAlert = false;
  }


  ngOnInit(): void {
  }

}
