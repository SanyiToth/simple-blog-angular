import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../comment.interface';


@Component({
  selector: 'app-comment',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent implements OnInit {
  @Input() commentMessage: Comment;

  constructor() {
  }


  ngOnInit(): void {
  }

}
