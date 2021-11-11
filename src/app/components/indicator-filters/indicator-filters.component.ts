import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TemplateService } from 'src/app/services/template.service';
import * as dayjs from 'dayjs';
import 'dayjs/locale/es';

@Component({
  selector: 'app-indicator-filters',
  templateUrl: './indicator-filters.component.html',
  styleUrls: ['./indicator-filters.component.less']
})
export class IndicatorFiltersComponent implements OnInit {

  @Input() indicator: string;
  @Output() filterEvent = new EventEmitter<FormGroup>();

  filterForm: FormGroup;
  today : string = dayjs().format('YYYY-MM-DD');
  minDate: string;
  minYear:string;
  year: string = dayjs().format('YYYY');
  years: string[]=[];
  theme:string;

  

  constructor(
    private formBuilder: FormBuilder,
    private templateService: TemplateService
  ) { }

  ngOnInit(): void {

    this.theme = this.templateService.themeValue;

    this.templateService.theme.subscribe( theme =>{
      this.theme = theme;
    });

    this.setMinDate();
    this.setYears();

    this.filterForm = this.formBuilder.group({
      filter: [''],
      date: [this.today],
      year: [dayjs().format('YYYY')] 
    });

    this.filterForm.valueChanges.subscribe( () => {
      this.filterEvent.emit(this.filterForm);
    })
  }

  setMinDate(){
    if(this.indicator == "uf"){
      this.minDate = dayjs('1997','YYYY').format('YYYY-MM-DD');
      this.minYear = dayjs('1997','YYYY').format('YYYY');
    }else if(this.indicator == "ivp"){
      this.minDate = dayjs('1990','YYYY').format('YYYY-MM-DD');
      this.minYear = dayjs('1990','YYYY').format('YYYY');
    }else if(this.indicator == "dolar"){
      this.minDate = dayjs('1984','YYYY').format('YYYY-MM-DD');
      this.minYear = dayjs('1984','YYYY').format('YYYY');
    }else if(this.indicator == "dolar_intercambio"){
      this.minDate = dayjs('1988','YYYY').format('YYYY-MM-DD');
      this.minYear = dayjs('1988','YYYY').format('YYYY');
    }else if(this.indicator == "euro"){
      this.minDate = dayjs('1999','YYYY').format('YYYY-MM-DD');
      this.minYear = dayjs('1999','YYYY').format('YYYY');
    }else if(this.indicator == "ipc"){
      this.minDate = dayjs('1928','YYYY').format('YYYY-MM-DD');
      this.minYear = dayjs('1928','YYYY').format('YYYY');
    }else if(this.indicator == "utm"){
      this.minDate = dayjs('1990','YYYY').format('YYYY-MM-DD');
      this.minYear = dayjs('1990','YYYY').format('YYYY');
    }else if(this.indicator == "imacec"){
      this.minDate = dayjs('1997','YYYY').format('YYYY-MM-DD');
      this.minYear = dayjs('1997','YYYY').format('YYYY');
    }else if(this.indicator == "tpm"){
      this.minDate = dayjs('2001','YYYY').format('YYYY-MM-DD');
      this.minYear = dayjs('2001','YYYY').format('YYYY');
    }else if(this.indicator == "libra_cobre"){
      this.minDate = dayjs('2012','YYYY').format('YYYY-MM-DD');
      this.minYear = dayjs('2012','YYYY').format('YYYY');
    }else if(this.indicator == "tasa_desempleo"){
      this.minDate = dayjs('2009','YYYY').format('YYYY-MM-DD');
      this.minYear = dayjs('2009','YYYY').format('YYYY');
    }else if(this.indicator == "bitcoin"){
      this.minDate = dayjs('2009','YYYY').format('YYYY-MM-DD');
      this.minYear = dayjs('2009','YYYY').format('YYYY');
    }
  }

  setYears(){
    for( let i: number = Number(this.minYear); i <= Number(this.year); i++ ){
      this.years.push(i.toString());
    }
  }

}
