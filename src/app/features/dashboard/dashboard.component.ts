import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';
import {DashboardService} from './dashboard.service';
import {Post} from '../posts/post.interface';
import {switchMap} from 'rxjs/operators';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  posts: Post [];
  errorMessage = '';
  loggedOut = false;

  constructor(private authService: AuthService, private router: Router, private dashboardService: DashboardService) {
  }

  ngOnInit(): void {
    this.dashboardService.getPosts().subscribe(posts => {
      this.posts = posts;
    }, errorMsg => {
      this.errorMessage = errorMsg;
    });
  }

  removeTodo(id): void {
    if (window.confirm('Are you sure to delete this post?')) {
      this.dashboardService.deletePost(id)
        .pipe(
          switchMap(() => this.dashboardService.getPosts()))
        .subscribe(posts => {
            console.log('response', posts);
            this.posts = posts;
          }, errorMsg => {
            this.errorMessage = errorMsg;
          }
        );
    }
  }


  logout(): void {
    this.loggedOut = true;
    this.authService.logout();
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1000);
  }
}
