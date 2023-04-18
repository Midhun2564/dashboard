import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.css']
})
export class TopProductsComponent implements OnInit {
  
  chart = new Chart({
    chart: {
      type: 'bar',
      height: 325
    },
    title: {
      text: 'Top 4'
    },
    xAxis: {
      categories: [
        'Apple 14 pro',
        'Noise fit pro',
        'Boat Nirvana',
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in %'
      }
    },
    series: [
     {
      type: 'bar',
      data: [
        {
          name: 'Apple 14 pro',
          y: 41.0,
          color: '#044342',
        },
        {
          name: 'Noise fit pro',
          y: 33.8,
          color: '#7e0505',
        },
        {
          name: 'Boat Nirvana',
          y: 6.5,
          color: '#ed9e20',
        }
        
      ]
     }
    ],
    credits: {
      enabled: false
    }
  })

  constructor() { }

  ngOnInit(): void {
  }

}
