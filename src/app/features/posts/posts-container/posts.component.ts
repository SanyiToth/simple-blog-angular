import {Component, OnInit} from '@angular/core';
import {Post} from '../post.interface';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  errorMessage = '';

  constructor(private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.posts =  this.router.snapshot.data.posts;
  }
}
