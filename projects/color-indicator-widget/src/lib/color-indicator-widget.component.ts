import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CdkDragMove } from '@angular/cdk/drag-drop';

import { IColorIndicator } from './color-indicator.model';
import { getElementWithSameLeftOffset } from './color-indicator.util';

@Component({
  selector: 'lib-color-indicator-widget',
  templateUrl: './color-indicator-widget.component.html',
  styleUrls: ['./color-indicator-widget.component.scss'],
})
export class ColorIndicatorWidgetComponent {
  @ViewChildren('colorStep', { read: ElementRef }) colors:
    | QueryList<ElementRef<HTMLElement>>
    | undefined;
  @Input('colors') list: IColorIndicator[] = [];
  @Input() showNoDataMessage?: boolean = true;
  @Output() colorChanged:EventEmitter<string> = new EventEmitter<string>();

  selectedColor: string;
  
  constructor() {
    this.selectedColor = '';
  }

  dragMove(event: CdkDragMove) {
    const sameElement = getElementWithSameLeftOffset(
      event.pointerPosition.x,
      this.colors?.toArray()
    );

    this.selectedColor =
      sameElement?.nativeElement?.getAttribute('color') || '';
      
      this.colorChanged.emit(this.selectedColor)
  }
}
