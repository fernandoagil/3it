import { Component, OnInit } from '@angular/core';
import { IndicatorsResponse } from 'src/app/models/indicators-response';
import { IndicatorsService } from 'src/app/services/indicators.service';
import { TemplateService } from 'src/app/services/template.service';



@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.less']
})
export class PageHomeComponent implements OnInit {

  indicators: IndicatorsResponse; 
  theme: string;

  constructor(
    private indicatorsService: IndicatorsService,
    private templateService: TemplateService
  ) { }

  ngOnInit(): void {

    window.scrollTo(0, 0);
    
    this.theme = this.templateService.themeValue;

    this.templateService.theme.subscribe( theme =>{
      this.theme = theme;
    });
    this.getIndicators();
  }

  getIndicators(){
    this.indicatorsService.getIndicators().subscribe( indicators => {
      this.indicators = indicators;
    });
  }

}
