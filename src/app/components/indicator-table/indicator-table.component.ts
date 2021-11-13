import { Component, OnInit, Input } from '@angular/core';
import { Serie } from 'src/app/models/serie';
import { TemplateService } from 'src/app/services/template.service';
import { PageService } from 'src/app/services/page.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { IndicatorTypeResponse } from 'src/app/models/indicator-type-response';

@Component({
  selector: 'app-indicator-table',
  templateUrl: './indicator-table.component.html',
  styleUrls: ['./indicator-table.component.less']
})
export class IndicatorTableComponent implements OnInit {

  @Input() series: Serie[];
  @Input() showSpinner: boolean;
  @Input() indicator: IndicatorTypeResponse;
  page:number = 0; 
  theme: string;
  colorSpinner: string = '#7952b3';
  bdSpinner: string = '#ffffff';

  constructor(
    private templateService: TemplateService,
    private pageService: PageService,
    private ngxSpinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {

    this.ngxSpinnerService.show();

    this.theme = this.templateService.themeValue;

    this.templateService.theme.subscribe( theme =>{
      this.theme = theme;

      if(theme === '3it'){
        this.bdSpinner = '#5254bd';
        this.colorSpinner = '#26c9d3';
      }else{
        this.bdSpinner = '#fff';
        this.colorSpinner = '#7952b3';
      }

    });

    this.pageService.page.subscribe( page =>{
      this.page = page;
    });
  }

  nextPage(){
    this.page += 7;
  
  }

  previusPage(){
    if(this.page > 0){
      this.page -= 7;
    }    
  }

}
