import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PortfolioItemsService } from "../portfolio-items.service";
import { PortfolioItem } from "../portfolio-item";

@Component({
  moduleId: module.id,
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  public portfolioItems: PortfolioItem[];

  constructor(
      private router: Router,
      private portfolioService: PortfolioItemsService
    ) { 
  	//this.portfolioItems = new PortfolioItemsService().getAllItems();
  }

  getPortfolio() {
    this.portfolioService.getAllItems().then(portfolioItems => this.portfolioItems = portfolioItems);
  }


  
  masonryOptions = {
		transitionDuration: '0.8s',
		itemSelector: '.article-grid-item',
		columnWidth: '.article-grid-sizer',
		percentPosition: true
    };




  ngOnInit() {
    this.getPortfolio()
  }


}
