# Angular heatmapjs wrapper
![promo](https://i.imgur.com/4opAXOT.png)
## Usage 
app.module
```
import {HeatmapComponent} from 'angular-heatmap'
declarations: [
    ...
    HeatmapComponent,
    ...
  ],
  ```
  in project
```<ng-heatmap [active]="true" [hidden]="false" [(heatmapData)]="twoWayBind"></ng-heatmap>```
## Properties
| Name                     | Default                                                                                 | Description                                 |
|--------------------------|-----------------------------------------------------------------------------------------|---------------------------------------------|
| @Input() hidden: boolean | false                                                                                   |                                             |
| @Input() active: boolean | true                                                                                    | un/subscribe to mouse events                |
| heatmapData: any         | null                                                                                    | two-way property   source of heatmap obejct |
| @Input() config: any     | ``` {maxOpacity: .6, radius: 15, blur: .90, backgroundColor: 'rgba(0, 0, 58, 0.96)'} ```| config for heatmap                          |
## Styling
Default class ```.heatmap``` can be overwritten by passing ```class``` property to ```<ng-heatmap>``` component.
```
.heatmap {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  opacity: .5;
  z-index: 9;
}
```
