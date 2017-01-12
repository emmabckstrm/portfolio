import { Component, OnInit } from '@angular/core';
import { PortfolioItemService } from "../portfolio-item.service";
import { PortfolioItem } from "../portfolio-item";

@Component({
  selector: 'app-portfolio-grid',
  templateUrl: './portfolio-grid.component.html',
  styleUrls: ['./portfolio-grid.component.css']
})
export class PortfolioGridComponent implements OnInit {

	public portfolioItems: PortfolioItem[];

  constructor() { 
  	this.portfolioItems = new PortfolioItemService().getAllItems();
  }

  ngOnInit() {
  	console.log(this);
  }

}
