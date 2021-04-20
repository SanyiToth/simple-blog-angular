import {Component, OnInit} from '@angular/core';
import {NewComment} from '../new-comment.interface';

@Component({
  selector: 'app-comment-form-container',
  templateUrl: './comment-form-container.component.html',
  styleUrls: ['./comment-form-container.component.css']
})
export class CommentFormContainerComponent implements OnInit {
  comment: NewComment;


  constructor() {
  }

  setComment(newComment: NewComment): void {
    this.comment = newComment;
    console.log('this.comment', this.comment);
  }


  ngOnInit(): void {
  }

}
