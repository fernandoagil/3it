import { Component, OnInit } from '@angular/core';
import { IndicatorTypeResponse } from 'src/app/models/indicator-type-response';
import { IndicatorsService } from 'src/app/services/indicators.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { TemplateService } from 'src/app/services/template.service';
import * as dayjs from 'dayjs';
import 'dayjs/locale/es';

@Component({
  selector: 'app-page-indicator',
  templateUrl: './page-indicator.component.html',
  styleUrls: ['./page-indicator.component.less']
})
export class PageIndicatorComponent implements OnInit {

  indicator: IndicatorTypeResponse;
  indicatorDetail: IndicatorTypeResponse;
  indicatorType: string = this.activatedRoute.snapshot.params.type; 
  filterForm: FormGroup;
  theme: string;
  showSpinner: boolean = false;

  constructor(
    private indicatorsService: IndicatorsService,
    private activatedRoute: ActivatedRoute,    
    private templateService: TemplateService
  ) { }

  ngOnInit(): void {

    window.scrollTo(0, 0);

    this.theme = this.templateService.themeValue;

    this.templateService.theme.subscribe( theme =>{
      this.theme = theme;
    });
    this.getIndicatorByType();
  }

  getIndicatorByType(): void{
    this.showSpinner = true;
    this.indicatorsService.getIndicatorByType(this.indicatorType).subscribe( indicator => {
      
      this.indicator = indicator;

      if (!this.indicatorDetail){
        this.indicatorDetail = indicator;
      }

      this.showSpinner = false;
      
    });
  }

  getIndicatorByTypeAndDate(indicatorType, date): void{
    this.showSpinner = true;
    this.indicatorsService.getIndicatorByTypeAndDate(indicatorType, date).subscribe( indicator => {
      this.indicator = indicator;
      this.showSpinner = false;
    });
  }

  getIndicatorByTypeAndYear(indicatorType, year): void{
    this.showSpinner = true;
    this.indicatorsService.getIndicatorByTypeAndYear(indicatorType, year).subscribe( indicator => {
      this.indicator = indicator;
      this.showSpinner = false;
    });
  }

  filter(filterForm: FormGroup): void{
    if (filterForm.value.filter === 'date'){
      this.getIndicatorByTypeAndDate(this.indicatorType, dayjs(filterForm.value.date).format('DD-MM-YYYY'));
    }else if ( filterForm.value.filter === 'year' ){
      this.getIndicatorByTypeAndYear(this.indicatorType, filterForm.value.year);
    }else{
      this.getIndicatorByType();
    }
  }

}
