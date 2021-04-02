import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from 'src/app/posts/posts.service';
import {Posts} from 'src/app/posts/posts';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  /*@Input() posts = [];*/
  posts: Posts[];
  names = ['John', 'Sebastian', 'Will', 'James'];
  num = [2, 3, 5];

  constructor(private postsService: PostsService) {
    this.posts = postsService.getPosts();
  }

  ngOnInit(): void {
  }

}
