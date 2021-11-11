import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IndicatorsResponse } from '../models/indicators-response';
import { IndicatorTypeResponse } from '../models/indicator-type-response';
import { map, retry, delay, retryWhen, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndicatorsService {

  constructor( private httpClient: HttpClient ) {}

  getIndicators(): Observable<IndicatorsResponse>{
    return this.httpClient.get<IndicatorsResponse>('https://mindicador.cl/api').pipe(
      retryWhen(
        error =>
          error.pipe(
            tap(() => console.log("error occurred ")),
            delay(2000),
            tap(() => console.log("Retrying ..."))
          )
      )
    );
  }

  getIndicatorByType( indicatorType ): Observable<IndicatorTypeResponse>{
    return this.httpClient.get<IndicatorTypeResponse>(`https://mindicador.cl/api/${indicatorType}`).pipe(
      retryWhen(
        error =>
          error.pipe(
            tap(() => console.log("error occurred ")),
            delay(2000),
            tap(() => console.log("Retrying ..."))
          )
      )
    );
  }

  getIndicatorByTypeAndDate( indicatorType, date ): Observable<IndicatorTypeResponse>{
    return this.httpClient.get<IndicatorTypeResponse>(`https://mindicador.cl/api/${indicatorType}/${date}`).pipe(
      retryWhen(
        error =>
          error.pipe(
            tap(() => console.log("error occurred ")),
            delay(2000),
            tap(() => console.log("Retrying ..."))
          )
      )
    );
  }

  getIndicatorByTypeAndYear( indicatorType, year ): Observable<IndicatorTypeResponse>{
    return this.httpClient.get<IndicatorTypeResponse>(`https://mindicador.cl/api/${indicatorType}/${year}`).pipe(
      retryWhen(
        error =>
          error.pipe(
            tap(() => console.log("error occurred ")),
            delay(2000),
            tap(() => console.log("Retrying ..."))
          )
      )
    );
  }

}
