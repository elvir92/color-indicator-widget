import { NgModule } from '@angular/core';
import { ColorIndicatorWidgetModule } from 'projects/color-indicator-widget/src/public-api';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    ColorIndicatorWidgetModule
  ],
})
export class HomeModule { }
