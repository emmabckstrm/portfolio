import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Params } from '@angular/router';
import { PortfolioItem } from "../portfolio-item";
import { PortfolioItemsService } from "../portfolio-items.service";

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  private portfolioItem: PortfolioItem;

  constructor(
  		private portfolioItemsService: PortfolioItemsService,
  		private route: ActivatedRoute
  	) { }

  ngOnInit() {
	  this.route.params
	      .switchMap((params: Params) => this.portfolioItemsService.getPortfolioItem(+params['id']))
	      .subscribe(portfolioItem => this.portfolioItem = portfolioItem);
  }

}
