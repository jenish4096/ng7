import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  // appTitle: string = 'myapp';
  // OR (either will work)
  appTitle = 'myapp';

  constructor() { }

  ngOnInit() {
  }

}
