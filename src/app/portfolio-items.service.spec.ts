/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PortfolioItemsService } from './portfolio-items.service';

describe('PortfolioItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortfolioItemsService]
    });
  });

  it('should ...', inject([PortfolioItemsService], (service: PortfolioItemsService) => {
    expect(service).toBeTruthy();
  }));
});
