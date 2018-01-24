import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public items: Array<any>;

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        title : 'Image 1',
        image : '/assets/img/uno.jpg'
      },
      {
        title : 'Image 2',
        image : '/assets/img/dos.jpg'
      },
      {
        title : 'Image 1',
        image : '/assets/img/tres.jpg'
      },
      {
        title : 'Image 1',
        image : '/assets/img/quatro.jpg'
      },
      {
        title : 'Image 1',
        image : '/assets/img/cinco.jpg'
      }

    ];
  }

}
