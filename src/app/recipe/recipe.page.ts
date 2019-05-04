import { Component, OnInit, ViewChild  } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {
  @ViewChild('barCanvas') barCanvas;
  barChart:any;

  constructor() {}
  ngOnInit() {
    this.createChart();
  }
  createChart(){
    this.barChart=new Chart(this.barCanvas.nativeElement, this.Chartconfig);
  }
  barCharttype(){
    this.barChart.destroy();
    this.Chartconfig.type='bar';
    this.barChart = new Chart(this.barCanvas.nativeElement, this.Chartconfig);
  }


  dataforchart=[3,5,1,0,2,3];
  chartType="bar";
  labels=["5","4","3","2","1","0"];
  backgroundcolors=['rgba(255,99,132,0.2','rgba(255,99,132,0.2','rgba(255,99,132,0.2','rgba(255,99,132,0.2','rgba(255,99,132,0.2','rgba(255,99,132,0.2'];
  bordercolors=['rgba(255,99,132,0.2','rgba(255,99,132,0.2','rgba(255,99,132,0.2','rgba(255,99,132,0.2','rgba(255,99,132,0.2','rgba(255,99,132,0.2'];
  Chartconfig={
    type:this.chartType,
    data:{
      labels:this.labels,
      datasets: [{
        label:'# of Stars',
        data:this.dataforchart,
        backgroundcolors:this.backgroundcolors,
        borderColor: this.bordercolors,
        borderWidth: 2
      }]
    },
    options:{
      scales:{
        yAxes:[{
          ticks:{
            beginAtZero:true
          }
        }]
      }
    }
  }

}
