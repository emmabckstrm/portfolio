import { Component, Input, OnInit } from '@angular/core';
import { PortfolioItem } from '../portfolio-item';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.css']
})
export class GridItemComponent implements OnInit {

	@Input() item: PortfolioItem;

  constructor() { }

  ngOnInit() {
  }

}
