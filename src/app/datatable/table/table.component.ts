import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { color, lightness } from 'kewler';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const blue = color('#0aa3c1');

export interface HeaderColors {
  background: string;
  borderLeft: string;
  borderRight: string;
}

export enum TableColumnType {
  "text" = "text",
  "phone" = "phone",
  "actions" = "actions",
  "status" = "status"
}

export interface TableColumn {
  type: TableColumnType;
  columns: (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12);
  key: string;
  title: string;
  actions?: TableAction[];
  status?: (item: any) => IconDefinition
}

export interface TableAction {
  icon: IconDefinition,
  fn: (item: any) => void
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

  getHeaderColors(i: number): HeaderColors {
    let bg = blue(lightness(i));
    return {
      background: bg() + '',
      borderLeft: `1px solid ${bg(lightness(5))() + ''}`,
      borderRight: `1px solid ${bg(lightness(-5))() + ''}`
    }
  }

  getStatus(cell: TableColumn, item: any): IconDefinition {
    if(cell && typeof cell.status == 'function') {
      return cell.status(item);
    } else {
      return null;
    }
  }

  execTableAction(ev: MouseEvent, action: TableAction, item: any): void {
    ev.preventDefault();
    ev.stopPropagation();
    if(action && typeof action.fn == 'function') {
      action.fn(item);
    }
  }

}
