import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }
  title: string = "Welcome to my website ";
  paragraph: string = "I'm a full stack developer, Portland based. I have experience working on a multitude of projects "
                      + "within full stack web develpment. I'm driven, passionate, and love to learn. "
  ngOnInit() {}

}
