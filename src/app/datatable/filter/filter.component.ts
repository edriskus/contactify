import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

export interface Filter {
  placeholder: string;
  key: string;
  columnSpan: number;
  type: ('boolean'|'text');
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() filters: Filter[];
  @Output() filterChange: EventEmitter<any> = new EventEmitter();

  filterValues: any = {}

  constructor() { }

  ngOnInit() {
  }

  submit(): void {
    this.filterChange.emit(this.filterValues);
  }

}
