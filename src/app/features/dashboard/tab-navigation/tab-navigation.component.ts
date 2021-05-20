import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab-navigation',
  templateUrl: './tab-navigation.component.html',
  styleUrls: ['./tab-navigation.component.css']
})
export class TabNavigationComponent implements OnInit {
  routes = [
    {title: 'posts', route: '/admin/posts'},
    {title: 'comments', route: '/admin/comments'},
    {title: 'page', route: '/admin/page'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
