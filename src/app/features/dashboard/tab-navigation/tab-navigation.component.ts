import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab-navigation',
  templateUrl: './tab-navigation.component.html',
  styleUrls: ['./tab-navigation.component.css']
})
export class TabNavigationComponent implements OnInit {
  routes = [
    {title: 'posts', root: ''},
    {title: 'comments', root: ''},
    {title: 'page', root: ''}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
