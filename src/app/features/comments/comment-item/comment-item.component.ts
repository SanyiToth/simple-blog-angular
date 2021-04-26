import {Component, Input, OnInit} from '@angular/core';
import {Comment} from 'src/app/features/comments/comment.interface';


@Component({
  selector: 'app-comment',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent implements OnInit {
  @Input() comment: Comment;

  constructor() {
  }


  ngOnInit(): void {
  }

}
