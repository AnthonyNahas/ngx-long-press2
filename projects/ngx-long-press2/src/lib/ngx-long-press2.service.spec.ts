import { TestBed } from '@angular/core/testing';

import { NgxLongPress2Service } from './ngx-long-press2.service';

describe('NgxLongPress2Service', () => {
  let service: NgxLongPress2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLongPress2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
