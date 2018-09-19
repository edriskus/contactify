import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import { SharedModule } from '../shared/shared.module';
import { DatatableModule } from '../datatable/datatable.module';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule,
    DatatableModule
  ],
  declarations: [ContactsComponent]
})
export class ContactsModule { }
