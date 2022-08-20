import { TestBed } from '@angular/core/testing';

import { ColorIndicatorWidgetService } from './color-indicator-widget.service';

describe('ColorIndicatorWidgetService', () => {
  let service: ColorIndicatorWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorIndicatorWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
