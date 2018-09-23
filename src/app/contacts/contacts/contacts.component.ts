import { Component, OnInit } from '@angular/core';
import { Filter } from '../../datatable/filter/filter.component';
import { ContactsService } from '../contacts.service';
import { Contact } from '../contacts.types';
import { Observable } from 'rxjs';
import { TableColumn, TableColumnType } from '../../datatable/table/table.component';

export interface InfoField {
  key: string;
  title: string;
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  selectedContact: Contact;

  columns: TableColumn[] = [
    { key: 'name', title: 'Name', type: TableColumnType.text, columns: 2 },
    { key: 'surname', title: 'Surname', type: TableColumnType.text, columns: 2 },
    { key: 'city', title: 'City', type: TableColumnType.text, columns: 2 },
    { key: 'email', title: 'Email', type: TableColumnType.text, columns: 3 },
    { key: 'phone', title: 'Phone', type: TableColumnType.phone, columns: 2 }
  ];
  contacts$: Observable<Contact[]>;

  userInfoFields: InfoField[] = [
    { key: 'name', title: 'Name' },
    { key: 'surname', title: 'Surname' },
    { key: 'city', title: 'City' },
    { key: 'email', title: 'Email' },
    { key: 'phone', title: 'Phone' }
  ]

  filters: Filter[] = [
    { placeholder: 'Name', key: 'name', columnSpan: 4 },
    { placeholder: 'City', key: 'city', columnSpan: 3 }
  ]

  constructor(
    private contactsService: ContactsService
  ) { }

  ngOnInit() {
    this.contacts$ = this.contactsService.getContacts();
  }

  formatBackground(path?: string): string {
    if(path != null) {

    } else {
      return '/assets/userpic.jpg';
    }
  }

  selectContact(contact?: Contact): void {
    this.selectedContact = contact;
  }

}
