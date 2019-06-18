import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {

  date: string;
  dayOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  constructor() {  }

  ngOnInit() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const dw = this.dayOfWeek[today.getDay()];
    const dyLong = String(today.getFullYear());
    const dy = dyLong.slice(-2);
    this.date = `${dw} ${dy}/${dd}`;
  }

}
