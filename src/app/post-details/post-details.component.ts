import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../posts/post.interface';
import {PostsService} from 'src/app/posts/posts.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  id;
  post: Post;
  errorMessage;

  constructor(private route: ActivatedRoute, private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.postsService.getPost(this.id)
        .subscribe(post => {
          this.post = post;
        }, errorMsg => {
          this.errorMessage = errorMsg;
        });
    });

  }

}
