import { Component, Input, OnInit } from '@angular/core';
import { PortfolioItem } from '../portfolio-item';

@Component({
  selector: 'app-portfolio-grid-item',
  templateUrl: './portfolio-grid-item.component.html',
  styleUrls: ['./portfolio-grid-item.component.css']
})
export class PortfolioGridItemComponent implements OnInit {

	@Input() item: PortfolioItem;

  constructor() { }

  ngOnInit() {
  }

}
