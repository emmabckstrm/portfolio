import { TestBed, inject } from '@angular/core/testing';

import { PortfolioItemsService } from './portfolio-items.service';

describe('PortfolioItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortfolioItemsService]
    });
  });

  it('should be created', inject([PortfolioItemsService], (service: PortfolioItemsService) => {
    expect(service).toBeTruthy();
  }));
});
