import { Component, OnInit } from '@angular/core';
import { wobble, wobbleTop, wobbleBottom, wobbleLeft, wobbleRight, swingLeft, swingRight } from 'ng-animation';

@Component({
  selector: 'app-wobble',
  animations: [ wobble, wobbleTop, wobbleBottom, wobbleLeft, wobbleRight, swingLeft, swingRight ],
  templateUrl: './wobble.component.html',
  styleUrls: ['./wobble.component.scss']
})
export class WobbleComponent implements OnInit {

  checked = true;
  isVisible = true;
  selectedAnim: string; 
  public wobble = true;
  public wobbleBottom = false;
  public wobbleTop = false;
  public wobbleLeft = false;
  public wobbleRight = false;
  public swingLeft = false;
  public swingRight = false;

  wobbleAnims = [ 'wobble', 'wobbleTop', 'wobbleBottom', 'wobbleLeft', 'wobbleRight', 'swingLeft', 'swingRight' ]

  toggle() { 
    this.isVisible = !this.isVisible;
  }

  constructor() { }

  ngOnInit() {
  }

  animate(animName:string) {
    // this.selectedAnim = animName;
    this[animName] = !this[animName];
  }

} 

