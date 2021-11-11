import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private pageSubject: BehaviorSubject<number>;
  public page: Observable<number>;

  constructor() { 
    this.pageSubject = new BehaviorSubject<number>(0);
    this.page = this.pageSubject.asObservable();

    if(!this.page){      
      this.pageSubject.next(0);
    }

  }

  public get pageValue(): number {
    return this.pageSubject.value;
  }

  resetPage(){    
    this.pageSubject.next(0);
  }
}
