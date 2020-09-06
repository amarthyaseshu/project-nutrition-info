import { Component, OnInit } from '@angular/core';
import { nutrientsInterface } from '../nutrients-interface';
import { nutrientsData } from '../nutrients-data';
import { InfoService } from '../info.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  filter: string;
  pattern: string;
  constructor(private info: InfoService) {}
  nutrients: nutrientsInterface[];
  category: string = '';
  ngOnInit(): void {
    this.nutrients = nutrientsData;
    this.info.currentValue.subscribe((value) => (this.filter = value));
  }
}
