import { Pipe, PipeTransform } from '@angular/core';
import { Serie } from 'src/app/models/serie';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform( series: Serie[], page: number): Serie[] {
    
    return series.slice(page, page + 7);


  }

}
