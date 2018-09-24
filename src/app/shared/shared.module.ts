import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { DropdownComponent } from './dropdown/dropdown.component';
import { SearchComponent } from './search/search.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  declarations: [
    DropdownComponent,
    SearchComponent,
    SelectComponent
  ],
  exports: [
    FormsModule,
    DropdownComponent,
    SearchComponent,
    SelectComponent,
    FontAwesomeModule
  ]
})
export class SharedModule { }
