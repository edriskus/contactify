import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

export enum TableColumnType {
  "text" = "text",
  "phone" = "phone",
  "action" = "action",
  "status" = "status"
}

export interface TableColumn {
  type: TableColumnType;
  columns: (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12);
  key: string;
  title: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  TableColumnType = TableColumnType;
  selectedRow: any;

  @Input() data: any[];
  @Input() columns: TableColumn[];
  @Output() select: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectRow(item: any): void {
    if(this.selectedRow == item) {
      this.selectedRow = null;
    } else {
      this.selectedRow = item;
    }
    this.select.emit(this.selectedRow);
  }

}
