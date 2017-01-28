import { Injectable } from '@angular/core';
import { PortfolioItem } from './portfolio-item';
import { PortfolioItems } from './portfolio-items';

@Injectable()
export class PortfolioItemsService {

  constructor() { }

  public getAllItems(){
  	//console.log(PortfolioItems);
  	return PortfolioItems;
  }

  filterItems1 = [];
  public getItemsFilter1() {

  	for (var i = 0; i < PortfolioItems.length; i++) {
  		if (String(PortfolioItems[i].tags) == "test1") {
  			this.filterItems1.push(PortfolioItems[i]);
  		}
  	}
  	return this.filterItems1;
  }

}
