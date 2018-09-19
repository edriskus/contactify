import { Component, OnInit, Input } from '@angular/core';

export interface Filter {
  placeholder: string;
  key: string;
  columnSpan: number;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() filters: Filter[];

  constructor() { }

  ngOnInit() {
  }

}
