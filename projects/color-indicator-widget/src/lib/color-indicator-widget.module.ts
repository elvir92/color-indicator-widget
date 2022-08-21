import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ColorIndicatorWidgetComponent } from './color-indicator-widget.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ColorIndicatorWidgetComponent,
  ],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [
    ColorIndicatorWidgetComponent
  ]
})
export class ColorIndicatorWidgetModule { }
