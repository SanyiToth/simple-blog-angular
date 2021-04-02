import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() data = {
    postImg: '',
    title: '',
    body: ''
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
