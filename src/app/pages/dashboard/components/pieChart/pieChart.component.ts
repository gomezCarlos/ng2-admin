import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {BaCard} from '../../../../theme/components';
//import {PieChartService} from './pieChart.service';
import {PieChartService} from '../../../../shared/pieChart.service';
import { UserService } from '../../../../shared/user.service';

import './pieChart.loader.ts';

@Component({
  selector: 'pie-chart',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard],
  providers: [PieChartService,HTTP_PROVIDERS,UserService],
  styles: [require('./pieChart.scss')],
  template: require('./pieChart.html')
})
// TODO: move easypiechart to component
export class PieChart implements OnInit{

  public charts: Array<Object>;
  public chartsRest: Array<Object>;
  private _init = false;

  constructor(private _pieChartService: PieChartService) {
    this.charts = this._pieChartService.getDataOrgiginal();

    
  }

  loadCharts(){
    this._pieChartService.getCharts().subscribe(response=>{
      this.chartsRest = response;
      let i =0;
      let value=0;
      for(let chart of this.chartsRest){
        this.charts[i].stats= chart.stats;
        this.charts[i].id= chart.id;
        value = Number(chart.stats);
        this.charts[i].description= chart.description;
        jQuery('.pie-charts .chart').each(function(index, chart) {
          if(index==i)
        jQuery(chart).data('easyPieChart').update(value);
        });
        i++;
      }
      
    },error=>{},()=>{
      
    });
  }

  ngOnInit(){
    

  }

  ngAfterViewInit() {
    if (!this._init) {
      this._loadPieCharts();
      
      //this._updatePieCharts();
      this.loadCharts();
      this._init = true;
    }

  }

  private _loadPieCharts() {

    jQuery('.chart').each(function () {
      let chart = jQuery(this);
      chart.easyPieChart({
        easing: 'easeOutBounce',
        onStep: function (from, to, percent) {
          jQuery(this.el).find('.percent').text(Math.round(percent));
        },
        barColor: jQuery(this).attr('data-rel'),
        trackColor: 'rgba(0,0,0,0)',
        size: 84,
        scaleLength: 0,
        animation: 2000,
        lineWidth: 9,
        lineCap: 'round',
      });
    });
  }

  private _updatePieCharts() {

    let getRandomArbitrary = (min, max) => { return Math.random() * (max - min) + min };

    jQuery('.pie-charts .chart').each(function(index, chart) {
      jQuery(chart).data('easyPieChart').update(1);
    });
  }
}
