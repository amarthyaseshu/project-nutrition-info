import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent implements OnInit {
  value: string;
  value1:string;
  constructor(private info: InfoService) {}
  ngOnInit() {
    this.info.currentValue.subscribe((value) => (this.value = value));
    this.info.currentValue1.subscribe((value1) => (this.value1 = value1));
  
  }
  setValue(val: string) {
    this.info.changeValue(val);
  }
  setValue1(val1: string) {
    this.info.changeValue1(val1);
  }

}
