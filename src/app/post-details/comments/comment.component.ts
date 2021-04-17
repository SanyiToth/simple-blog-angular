import {Component, OnInit} from '@angular/core';
import {CommentsService} from './comments.service';
import {Comment} from './comment.interface';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  commentMessage: Comment;

  constructor(private postsService: CommentsService) {
  }


  ngOnInit(): void {
  }

}
