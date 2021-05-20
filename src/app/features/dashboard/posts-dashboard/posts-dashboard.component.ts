import {Component, OnInit} from '@angular/core';
import {PostsService} from '../../posts/posts.service';
import {Post} from '../../posts/post.interface';

@Component({
  selector: 'app-posts-dashboard',
  templateUrl: './posts-dashboard.component.html',
  styleUrls: ['./posts-dashboard.component.css']
})
export class PostsDashboardComponent implements OnInit {
  posts: Post [];
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
