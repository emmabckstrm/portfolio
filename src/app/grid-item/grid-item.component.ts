import { Component, Input, OnInit } from '@angular/core';
import { PortfolioItem } from '../portfolio-item';

@Component({
  selector: 'masonry-brick',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.css']
})
export class GridItemComponent implements OnInit {

	@Input() item: PortfolioItem;

  constructor() { }

  test1 = true;
  test2 = false;
  test3 = true;

  ngOnInit() {
  }

}
