import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  opened = true;
}
