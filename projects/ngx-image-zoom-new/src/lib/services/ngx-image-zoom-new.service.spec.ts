import { TestBed } from '@angular/core/testing';

import { NgxImageZoomNewService } from './ngx-image-zoom-new.service';

describe('NgxImageZoomNewService', () => {
  let service: NgxImageZoomNewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxImageZoomNewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
