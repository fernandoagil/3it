import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';


@Pipe({
  name: 'dayjs'
})
export class DayjsPipe implements PipeTransform {

  transform(date : string, format: string): string {   
    dayjs.extend(utc); 
    return dayjs(date).utc().format(format);
  }

}
