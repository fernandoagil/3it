import { Component, OnInit, Input } from '@angular/core';
import { Serie } from 'src/app/models/serie';
import { ChartSerie } from 'src/app/models/chart-serie';
import { TemplateService } from 'src/app/services/template.service';

@Component({
  selector: 'app-indicator-chart',
  templateUrl: './indicator-chart.component.html',
  styleUrls: ['./indicator-chart.component.less']
})
export class IndicatorChartComponent implements OnInit {

  @Input() serie: Serie[];
  @Input() indicator: string;

  multi: ChartSerie[] = [];
  fitContainer: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  timeline: boolean = true;
  theme: string;

  colorScheme = {
    domain: ['#7952b3']
  };

  constructor(
    private templateService: TemplateService
  ) {}

  ngOnInit(): void {

    this.theme = this.templateService.themeValue;

    this.templateService.theme.subscribe( theme =>{
      this.theme = theme;
      if( theme == '3it'){
        this.colorScheme = {
          domain: ['#26c9d3']
        };
      }else{
        this.colorScheme = {
          domain: ['#7952b3']
        };
      }
    });

    this.setMulti();

  }

  setMulti(){
    let newSerie : ChartSerie = { name: this.indicator, series: [] };

    newSerie.name = this.indicator;
    this.serie.reverse().forEach( serie => {
      newSerie.series.push({ name: serie.fecha, value: serie.valor });
    } )

    this.multi.push( newSerie )
  }

}
