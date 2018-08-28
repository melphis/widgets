import {Component, Input, OnInit} from '@angular/core';
import {Widget} from '../widget';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  @Input() data: Widget;

  constructor() {}

  ngOnInit() {
  }

}
