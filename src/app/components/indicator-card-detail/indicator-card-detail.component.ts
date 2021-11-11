import { Component, OnInit, Input } from '@angular/core';
import { IndicatorTypeResponse } from 'src/app/models/indicator-type-response';
import { TemplateService } from 'src/app/services/template.service';

@Component({
  selector: 'app-indicator-card-detail',
  templateUrl: './indicator-card-detail.component.html',
  styleUrls: ['./indicator-card-detail.component.less']
})
export class IndicatorCardDetailComponent implements OnInit {

  theme: string;

  @Input() indicator: IndicatorTypeResponse;

  constructor(
    private templateService: TemplateService
  ) { }

  ngOnInit(): void {
    this.theme = this.templateService.themeValue;

    this.templateService.theme.subscribe( theme =>{
      this.theme = theme;
    });
  }

}
