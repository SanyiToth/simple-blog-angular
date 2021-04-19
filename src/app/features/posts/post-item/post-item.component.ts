import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../post.interface';



@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() data: Post;


  constructor() {
  }

  ngOnInit(): void {
  }

}
