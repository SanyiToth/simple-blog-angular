import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerLinks = [
    {title: 'Blog', root: ''},
    {title: 'Terms & Conditions', root: ''},
    {title: 'About Us', root: ''},
    {title: 'Contact', root: ''}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
