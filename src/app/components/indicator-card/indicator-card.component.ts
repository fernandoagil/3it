import { Component, OnInit, Input } from '@angular/core';
import { Indicator } from 'src/app/models/indicator';
import { Router } from '@angular/router';
import { TemplateService } from 'src/app/services/template.service';


@Component({
  selector: 'app-indicator-card',
  templateUrl: './indicator-card.component.html',
  styleUrls: ['./indicator-card.component.less']
})
export class IndicatorCardComponent implements OnInit {

  theme: string;

  @Input() indicator: Indicator;

  constructor(
    private router: Router,
    private templateService: TemplateService
  ) { }

  ngOnInit(): void {
    this.theme = this.templateService.themeValue;

    this.templateService.theme.subscribe( theme =>{
      this.theme = theme;
    });
  }

  viewIndicator(){
    this.router.navigate([`/indicator/${this.indicator.codigo}`]);
  }

}
