import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TableComponent,
    FilterComponent
  ],
  exports: [
    TableComponent,
    FilterComponent
  ]
})
export class DatatableModule { }
