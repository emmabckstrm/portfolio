import { Component, Input, OnInit } from '@angular/core';
import { PortfolioItem } from '../portfolio-item';

@Component({
  selector: 'masonry-brick',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent implements OnInit {
  @Input() item: PortfolioItem;

  constructor() { }

  ngOnInit() {
  }

}
