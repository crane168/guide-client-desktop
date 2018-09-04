import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'guide-client-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private imgurl :string;
  constructor() {
    this.imgurl= "/assets/dengpao.png";
  }

  ngOnInit() {
  }

}
