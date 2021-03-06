import { Component, OnInit } from '@angular/core';
import { 
  rotateLeft, 
  rotateRight, 
  rotateLarge, 
  rotateLeftRight, 
  rotateRightLeft, 
  rotateLargeSlow, 
  rotateLeftZoom,
  rotateRightZoom,
  rotateLeftRightZoom,
  rotateRightLeftZoom 
} from 'ng-animation';

@Component({
  selector: 'app-rotate',
animations: [ 
  rotateLeft, 
  rotateRight, 
  rotateLeftRight, 
  rotateRightLeft, 
  rotateLarge, 
  rotateLargeSlow, 
  rotateLeftZoom,
  rotateRightZoom,
  rotateLeftRightZoom,
  rotateRightLeftZoom 
 ],
  templateUrl: './rotate.component.html',
  styleUrls: ['./rotate.component.scss']
})
export class RotateComponent implements OnInit {

  checked = true;
  isVisible = true;
  text = true;
  selectedAnim: string; 
  public rotateLeft = true;
  public rotateRight = false;
  public rotateLarge = false;
  public rotateLeftRight = false;
  public rotateRightLeft = false;
  public rotateLargeSlow = false;
  public rotateLeftZoom = false;
  public rotateRightZoom = false;
  public rotateLeftRightZoom = false;
  public rotateRightLeftZoom = false;

  rotateAnims = [
    'rotateLeft', 
    'rotateRight', 
    'rotateLeftRight', 
    'rotateRightLeft', 
    'rotateLarge', 
    'rotateLargeSlow', 
    'rotateLeftZoom',
    'rotateRightZoom',
    'rotateLeftRightZoom',
    'rotateRightLeftZoom' 
  ]

  toggle() { 
    this.isVisible = !this.isVisible;
    this.text = !this.text;
  }
  
  constructor() { }

  ngOnInit() {
  }

  animate(animName:string) {
    // this.selectedAnim = animName;
    this[animName] = !this[animName];
  }
}
