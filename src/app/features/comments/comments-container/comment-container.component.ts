import {Component, Input, OnInit} from '@angular/core';
import {CommentsService} from '../comments.service';
import {Comment, NewComment} from '../comment.interface';



@Component({
  selector: 'app-comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.css']
})
export class CommentContainerComponent implements OnInit {

  @Input() postId: number;
  comments: Comment[];
  errorMessage = '';

  constructor(private commentService: CommentsService) {
  }


  setNewCommentItem(newComment: NewComment): void {
    this.comments = [newComment, ...this.comments];
  }

  ngOnInit(): void {
    this.commentService.getComments(this.postId)
      .subscribe(response => {
        this.comments = response;
      }, error => {
        this.errorMessage = error;
      });
  }
}


