import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from 'src/app/core/services/posts.service';
import {Post} from '../../core/interfaces/post.interface';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  errorMessage = '';

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    }, errorMsg => {
      this.errorMessage = errorMsg;
    });

  }
}
