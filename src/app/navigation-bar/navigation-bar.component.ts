import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent implements OnInit {
  value: string;
  
pattern: string;
  
  constructor(private info: InfoService) {}
  ngOnInit() {
    this.info.currentValue.subscribe((value) => (this.value = value));
    
  }
  setValue(val: string) {
    this.info.changeValue(val);
  }
  
}
