import { Component, OnInit } from '@angular/core';
import { PortfolioItemsService } from "../portfolio-items.service";
import { PortfolioItem } from "../portfolio-item";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  public portfolioItems: PortfolioItem[];

  constructor() { 
  	this.portfolioItems = new PortfolioItemsService().getAllItems();
  }

  filter1() {
    this.portfolioItems = new PortfolioItemsService().getItemsFilter1()
  }

  showAll() {
    this.portfolioItems = new PortfolioItemsService().getAllItems();
  }

  
  masonryOptions = {
		transitionDuration: '0.8s',
		itemSelector: '.article-grid-item',
		columnWidth: '.article-grid-sizer',
		percentPosition: true
    };




  ngOnInit() {
  }


}
