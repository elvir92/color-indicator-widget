import { IColorIndicator } from 'projects/color-indicator-widget/src/public-api';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent{
  colors: IColorIndicator[] = [
    { color: 'red', width: '10%' },
    { color: 'black', width: '30%' },
    { color: 'blue', width: '10%' },
    { color: '#fcba03', width: '10%' },
    { color: 'yellow', width: '40%' },
  ];

}
