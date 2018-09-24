import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { FilterComponent } from './filter/filter.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
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
