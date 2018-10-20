import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import * as HeatMapJS from 'heatmapjs';

@Component({
  selector: 'ng-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css']
})
export class HeatmapComponent implements OnInit {
  @Input() config: any;
  @Input() hidden = false;
  @Input() active = true;

  @Input()
  get heatmapData() {
    return this._heatmap.getData();
  }

  @Output() heatmapDataChange: EventEmitter<any> = new EventEmitter<any>();

  set heatmapData(value) {
    if (this._heatmap) {
      this._heatmap.setData(value);
      this.heatmapDataChange.emit(this._heatmap.getData());
    }
  }

  private _heatmap: any;

  constructor() {
  }

  ngOnInit() {
    const defaultConfig = this.config ? this.config : {
      maxOpacity: .6,
      radius: 15,
      blur: .90,
      backgroundColor: 'rgba(0, 0, 58, 0.96)'
    };
    defaultConfig['container'] = document.getElementById('heatmap-view');
    this._heatmap = HeatMapJS.create(defaultConfig);
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove(ev: MouseEvent) {
    if (this.active) {
      ev.preventDefault();
      const x = ev.clientX;
      const y = ev.clientY;
      this._heatmap.addData({x: x, y: y, value: 1});
      this.heatmapDataChange.emit(this._heatmap.getData());
    }
  }

  @HostListener('document:touchmove', ['$event'])
  onTouchmove(ev: TouchEvent) {
    ev.preventDefault();
    if (this.active) {
      ev.preventDefault();
      const x = ev.touches[0].pageX;
      const y = ev.touches[0].pageY;
      this._heatmap.addData({x: x, y: y, value: 1});
      this.heatmapDataChange.emit(this._heatmap.getData());
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(ev: MouseEvent) {
    ev.preventDefault();
    if (this.active) {
      const x = ev.clientX;
      const y = ev.clientY;
      this._heatmap.addData({x: x, y: y, value: 1});
      this.heatmapDataChange.emit(this._heatmap.getData());
    }
  }
}
