import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {switchMap, tap} from 'rxjs/operators';
import {PostsService} from '../posts.service';
import {Post} from '../post.interface';


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


  onSubmit(): void {
    console.log('submit');
  }

  ngOnInit(): void {
    this.route.params
      .pipe(
        tap(params => {
            this.id = params.id;
          }
        ),
        switchMap(() => this.postsService.getPost(this.id)))
      .subscribe(response => {
        this.post = response;
      }, error => {
        this.errorMessage = error;
      });
  }
}
