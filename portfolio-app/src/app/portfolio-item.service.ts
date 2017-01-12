import { Injectable } from '@angular/core';
import { PortfolioItem } from './portfolio-item';
import { PortfolioItems } from './portfolio-items';

@Injectable()
export class PortfolioItemService {

  constructor() { }

  public getAllItems(){
  	return PortfolioItems;
  }

}
