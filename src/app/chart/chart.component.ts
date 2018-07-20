import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { obj } from '../object.component';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  chart: Chart;
  isActiveKey = 'charts';
  constructor(private loadingBar: LoadingBarService, private localStorage:LocalStorageService) { }

  ngOnInit() {
    this.localStorage.clear('isActiveKey');
    this.localStorage.store('isActiveKey', this.isActiveKey);
    // console.log(this.localStorage.retrieve('boundValue'));
    
    this.loadingBar.start();
    this.init();
  }
  addPoint() {
    if (this.chart) {
      this.chart.addPoint(Math.floor(Math.random() * 10));
    } else {
      alert('init chart, first!');
    }
  }

  addSerie() {
    this.chart.addSerie({
      name: 'Line ' + Math.floor(Math.random() * 10),
      data: [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10)
      ]
    });
  }

  removePoint() {
    this.chart.removePoint(this.chart.ref.series[0].data.length - 1);
  }

  removeSerie() {
    this.chart.removeSerie(this.chart.ref.series.length - 1);
  }

  init() {
    let chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Linechart'
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Line 1',
        data: [1, 2, 3]
      }]
    });
    chart.addPoint(4);
    this.chart = chart;
    chart.addPoint(5);
    setTimeout(() => {
      chart.addPoint(6);
    }, 2000);
    this.loadingBar.complete();
    chart.ref$.subscribe(console.log);
  }

}
