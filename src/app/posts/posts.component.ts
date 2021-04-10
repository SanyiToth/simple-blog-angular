import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from 'src/app/posts/posts.service';
import {Post} from 'src/app/posts/post.interface';


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

  checkPost(): string {
    if (this.errorMessage !== '') {
      console.log('checkPost() return error');
      return 'error';
    } else if (this.posts.length > 0) {
      console.log('checkPost() return withPosts');
      return 'withPosts';
    } else if (this.posts.length === 0) {
      console.log('checkPost() return noPost');
      return 'noPost';
    }
  }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    }, errorMsg => {
      this.errorMessage = errorMsg;
    });


  }
}
