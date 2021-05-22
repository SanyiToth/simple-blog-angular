import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerLinks = [
    {title: 'Blog', route: ''},
    {title: 'Terms & Conditions', route: '/page'},
    {title: 'About Us', route: '/page'},
    {title: 'Contact', route: '/contact'},
   // {title: 'Admin', root: '/admin'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
