import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loggedOut = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {




  }

  logout(): void {
    this.loggedOut = true;
    this.authService.logout();
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1000);
  }
}
