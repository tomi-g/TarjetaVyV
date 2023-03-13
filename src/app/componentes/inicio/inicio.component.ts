import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  _second = 1000;
  _minute = this._second * 60;
  _hour = this._minute * 60;
  _day = this._hour * 24;
  _month = this._day / 0.032854;

  end: any;
  now: any;
  month: any;
  day: any;
  hours: any;
  minutes: any;
  seconds: any;
  source = timer(0, 1000);
  clock: any;

  constructor() { }

  ngOnInit(): void {
    this.clock = this.source.subscribe(t => {
      this.now = new Date();
      this.end = new Date('10/07/2023 18:00:00');
      this.showDate();
    });
  }

  showDate(){
    let distance = this.end - this.now;
    if (distance > 0) {
      this.month = Math.floor(distance / this._month);
      this.day = Math.floor((distance % this._month) / this._day);
      this.hours = Math.floor((distance % this._day) / this._hour);
      this.minutes = Math.floor((distance % this._hour) / this._minute);
      this.seconds = Math.floor((distance % this._minute) / this._second);
    }
    else{
      this.month = 0;
      this.day = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    }
  }

}
