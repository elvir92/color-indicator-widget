import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorIndicatorWidgetComponent } from './color-indicator-widget.component';

describe('ColorIndicatorWidgetComponent', () => {
  let component: ColorIndicatorWidgetComponent;
  let fixture: ComponentFixture<ColorIndicatorWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorIndicatorWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorIndicatorWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
