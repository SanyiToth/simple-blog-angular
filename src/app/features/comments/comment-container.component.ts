import {Component, Input, OnInit} from '@angular/core';
import {CommentsService} from '../../core/services/comments.service';
import {Comment} from '../../core/interfaces/comment.interface';


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

  ngOnInit(): void {
    this.commentService.getComments(this.postId)
      .subscribe(response => {
        this.comments = response;
      }, error => {
        this.errorMessage = error;
      });
  }
}
