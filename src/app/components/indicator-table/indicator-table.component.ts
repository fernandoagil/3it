import { Component, OnInit, Input } from '@angular/core';
import { Serie } from 'src/app/models/serie';
import { TemplateService } from 'src/app/services/template.service';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-indicator-table',
  templateUrl: './indicator-table.component.html',
  styleUrls: ['./indicator-table.component.less']
})
export class IndicatorTableComponent implements OnInit {

  @Input() series: Serie[];
  page:number = 0; 
  theme: string;

  constructor(
    private templateService: TemplateService,
    private pageService: PageService
  ) { }

  ngOnInit(): void {
    this.theme = this.templateService.themeValue;

    this.templateService.theme.subscribe( theme =>{
      this.theme = theme;
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
