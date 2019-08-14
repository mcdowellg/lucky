import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  inputData = '';
  private dataSource = new BehaviorSubject<string>(this.inputData);
  data = this.dataSource.asObservable();

  constructor() { }

  updateData(data: string){
    this.dataSource.next(data);
  }
  
}
