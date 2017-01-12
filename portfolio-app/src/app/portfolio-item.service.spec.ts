/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PortfolioItemService } from './portfolio-item.service';

describe('Service: PortfolioItem', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortfolioItemService]
    });
  });

  it('should ...', inject([PortfolioItemService], (service: PortfolioItemService) => {
    expect(service).toBeTruthy();
  }));
});
