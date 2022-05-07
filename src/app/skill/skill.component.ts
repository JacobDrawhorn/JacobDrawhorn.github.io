import { style } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { element } from 'protractor';
import { scrollAnimation } from '../shared/animations';
import { ScrollAnimationComponent } from '../shared/scroll-animation.component';

@Component({
  selector: 'skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  animations: [
    scrollAnimation
  ]
})
export class SkillComponent extends ScrollAnimationComponent implements OnInit {

  constructor(_el:ElementRef, cdRef:ChangeDetectorRef, private http:HttpClient){
    super(_el, cdRef);
  }

  skills:any = [];

  ngOnInit() {
    this.http.get("./assets/json/skills.json").subscribe(skills => {
      this.skills = skills;
    });
  }
  clickEvent() {
    var checkBox = document.getElementById('toggle') as HTMLInputElement;
    var tog = document.getElementsByTagName('span')[0]; 
    var tog1 = document.getElementsByTagName('span')[1]; 
    var tog2 = document.getElementsByTagName('span')[2]; 
    var tog3 = document.getElementsByTagName('span')[3]; 
    var tog4 = document.getElementsByTagName('span')[4]; 
    var tog5 = document.getElementsByTagName('span')[5]; 
    var tog6 = document.getElementsByTagName('span')[6]; 
    var tog7 = document.getElementsByTagName('span')[7]; 
    var tog8 = document.getElementsByTagName('span')[8]; 
    var tog9 = document.getElementsByTagName('span')[9]; 
    var tog10 = document.getElementsByTagName('span')[10]; 
    var tog11 = document.getElementsByTagName('span')[11]; 
      tog.style.visibility = "inherit";
      tog1.style.visibility = "inherit";
      tog2.style.visibility = "inherit";
      tog3.style.visibility = "inherit";
      tog4.style.visibility = "inherit";
      tog5.style.visibility = "inherit";
      tog6.style.visibility = "inherit";
      tog7.style.visibility = "inherit";
      tog8.style.visibility = "inherit";
      tog9.style.visibility = "inherit";
      tog10.style.visibility = "inherit";
      tog11.style.visibility = "inherit";
        if (checkBox.checked == true) {
          tog.style.visibility = "visable";
          tog1.style.visibility = "visable";
          tog2.style.visibility = "visable";
          tog3.style.visibility = "visable";
          tog4.style.visibility = "visable";
          tog5.style.visibility = "visable";
          tog6.style.visibility = "visable";
          tog7.style.visibility = "visable";
          tog8.style.visibility = "visable";
          tog9.style.visibility = "visable";
          tog10.style.visibility = "visable";
          tog11.style.visibility = "visable";
        } else {
          tog.style.visibility = "hidden";
          tog1.style.visibility = "hidden";
          tog2.style.visibility = "hidden";
          tog3.style.visibility = "hidden";
          tog4.style.visibility = "hidden";
          tog5.style.visibility = "hidden";
          tog6.style.visibility = "hidden";
          tog7.style.visibility = "hidden";
          tog8.style.visibility = "hidden";
          tog9.style.visibility = "hidden";
          tog10.style.visibility = "hidden";
          tog11.style.visibility = "hidden";
        }
  }
}



