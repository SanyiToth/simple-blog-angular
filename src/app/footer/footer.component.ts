import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerLinks = [
    {title: 'Blog', root: ''},
    {title: 'Terms & Conditions', root: '/page'},
    {title: 'About Us', root: '/about-us'},
    {title: 'Contact', root: '/contact'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
