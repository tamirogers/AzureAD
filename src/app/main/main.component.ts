import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';

// Component decorator. templateUrl assigns main as your main html home page
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({ opacity: 0}), {optional: true}),
        query(':enter', stagger('300ms', [
            animate('.6s ease-in', keyframes([
              style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
              style({opacity: 1, transform: 'translateY(0)', offset: 1}),
            ]))]), {optional: true}),
        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
          ]))]), {optional: true})
      ])
    ])
  ]
})
export class MainComponent implements OnInit {

  // interpolation demo
  itemCount: number;
  btnText: string = 'Add an item';
  myAddedData: string = 'my first data';
  myData = [];

  constructor(private _data: DataService) { }
// ngOnInit loads things listed here when the app or component first loads.  Item count ordered after myData loads
  ngOnInit() {
    this._data.goal.subscribe(res => this.myData = res);
    this.itemCount = this.myData.length;
    this._data.changeGoal(this.myData);
  }
  addItem() {
    this.myData.push(this.myAddedData);
    this.myAddedData = '';
    this.itemCount = this.myData.length;
    this._data.changeGoal(this.myData);
  }
  removeItem(i) {
    this.myData.splice(i, 1);
    this._data.changeGoal(this.myData);
  }
}
