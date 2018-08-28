import { TestBed, inject } from '@angular/core/testing';

import { FixturesLoaderService } from './fixtures-loader.service';

describe('FixturesLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FixturesLoaderService]
    });
  });

  it('should be created', inject([FixturesLoaderService], (service: FixturesLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
