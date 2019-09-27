import { Component, OnInit } from '@angular/core';
import { fade, fadeUp, fadeDown, fadeRight, fadeLeft } from 'ng-animation'


@Component({
  selector: 'app-fade',
  animations: [ fade, fadeUp, fadeDown, fadeRight, fadeLeft ],
  templateUrl: './fade.component.html',
  styleUrls: ['./fade.component.scss']
})
export class FadeComponent implements OnInit {

  isVisible = true;

  toggle() {
    this.isVisible = !this.isVisible;
  }
  
  constructor() { }

  ngOnInit() {
  }

}