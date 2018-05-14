import { Component, OnInit } from '@angular/core';
import { Adal5Service } from 'adal-angular5';

import { environment } from '../environments/environment';

// component decorator, defines the structure of component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// the logic for your app
export class AppComponent implements OnInit {
  constructor(private adalSvc: Adal5Service) {
    this.adalSvc.init(environment.adalConfig);
  }
  ngOnInit(): void {
    this.adalSvc.handleWindowCallback();
  }
}

