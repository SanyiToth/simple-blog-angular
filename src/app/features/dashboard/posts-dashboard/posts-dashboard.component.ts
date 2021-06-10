import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Post} from '../../posts/post.interface';


@Component({
  selector: 'app-posts-dashboard',
  templateUrl: './posts-dashboard.component.html',
  styleUrls: ['./posts-dashboard.component.css']
})
export class PostsDashboardComponent implements OnInit {

  @Input() posts: Post[];
  @Output() newDeleteEvent = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {

  }

  removePostItem(id): void {
    this.newDeleteEvent.emit(id);
  }
}
