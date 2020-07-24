import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class InfoService {
  
  private valueSource = new BehaviorSubject('');
  private valueSource1 = new BehaviorSubject('');
  currentValue = this.valueSource.asObservable();
  currentValue1 = this.valueSource1.asObservable();
  constructor() {}
  changeValue(value: string) {
    this.valueSource.next(value);
  }
  changeValue1(value1: string) {
    this.valueSource1.next(value1)
}
}
