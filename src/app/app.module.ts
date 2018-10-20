import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HeatmapComponent} from '../../projects/angular-heatmap/src/lib/heatmap/heatmap.component';

@NgModule({
  declarations: [
    AppComponent,
    HeatmapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
