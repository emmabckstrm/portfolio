import { Injectable } from '@angular/core';
import { PortfolioItem } from './portfolio-item';
import { PortfolioItems } from './portfolio-items';

@Injectable()
export class PortfolioItemsService {

  constructor() { }

  getAllItems(): Promise<PortfolioItem[]>{
  	return Promise.resolve(PortfolioItems);
  }

  getPortfolioItem(id: number): Promise<PortfolioItem> {
    return this.getAllItems()
      .then(
        portfolioItems => portfolioItems.find(portfolioItem => portfolioItem.id === id)
      )
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
