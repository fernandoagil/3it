import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  private themeSubject: BehaviorSubject<string>;
  public theme: Observable<string>;

  constructor() { 
    this.themeSubject = new BehaviorSubject<string>(localStorage.getItem('theme'));
    this.theme = this.themeSubject.asObservable();

    if(!this.theme){
      localStorage.setItem('lang', 'bootstrap');
      this.themeSubject.next('boostrap');
    }

  }

  public get themeValue(): string {
    return this.themeSubject.value;
  }
  
  setTheme(theme){
    localStorage.setItem('theme', theme);
    this.themeSubject.next(theme);
  }


}
