import { Component, OnInit } from '@angular/core';
import { Filter } from '../../datatable/filter/filter.component';
import { ContactsService } from '../contacts.service';
import { Contact } from '../contacts.types';
import { Observable } from 'rxjs';
import { TableColumn, TableColumnType } from '../../datatable/table/table.component';
import { faPencilAlt, faTrash, faEye, faEyeSlash, IconDefinition, faPlus } from '@fortawesome/free-solid-svg-icons';

export interface InfoField {
  key: string;
  title: string;
  email?: boolean;
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  plusIcon: IconDefinition = faPlus;
  selectedContact: Contact;

  columns: TableColumn[] = [
    { key: 'name', title: 'Name', type: TableColumnType.status, columns: 2, status: (c: Contact) => {
      return !!c.active ? faEye : faEyeSlash;
    } },
    { key: 'surname', title: 'Surname', type: TableColumnType.text, columns: 2 },
    { key: 'city', title: 'City', type: TableColumnType.text, columns: 2 },
    { key: 'email', title: 'Email', type: TableColumnType.text, columns: 3 },
    { key: 'phone', title: 'Phone', type: TableColumnType.phone, columns: 2 },
    { key: 'id', title: '', type: TableColumnType.actions, columns: 1, actions: [
      { icon: faPencilAlt, fn: (c: Contact) => alert('Edit contact coming soon!') },
      { icon: faTrash, fn: (c: Contact) => alert('Delete contact coming soon!') }
    ] }
  ];
  contacts: Contact[];
  contactSource: Contact[];

  userInfoFields: InfoField[] = [
    { key: 'name', title: 'Name' },
    { key: 'surname', title: 'Surname' },
    { key: 'city', title: 'City' },
    { key: 'email', title: 'Email', email: true },
    { key: 'phone', title: 'Phone' }
  ]

  filters: Filter[] = [
    { placeholder: 'Name', key: 'name', columnSpan: 4, type: 'text' },
    { placeholder: 'City', key: 'city', columnSpan: 3, type: 'text' },
    { placeholder: 'Show active', key: 'active', columnSpan: 2, type: 'boolean' }
  ]

  constructor(
    private contactsService: ContactsService
  ) { }

  ngOnInit() {
    this.contactsService.getContacts().subscribe(
      (contacts: Contact[]) => this.contacts = this.contactSource = contacts.sort(
        (a: Contact, b: Contact) => (a.name > b.name ? 1 : (a.name === b.name ? 0 : -1))
      )
    );
  }

  formatBackground(path?: string): string {
    if(path != null) {
      return `url(${path}`
    } else {
      return 'url(/assets/userpic.jpg)';
    }
  }

  selectContact(contact?: Contact): void {
    this.selectedContact = contact;
  }

  /**
   * Filtering logic
   */

  filterChange(filterValues: any): void {
    let vals = { ...filterValues };
    let val = [...this.contactSource];
    for(let key in vals) {
      if(vals[key] != null && vals[key] != '') {
        val = val.filter(item => {
          if(typeof vals[key] == 'string') {
            return (item[key] + '').toLowerCase().indexOf(vals[key].toLowerCase().trim()) != -1;
          } else {
            return item[key] === vals[key];
          }
        });
      }
    }
    this.contacts = val;
  }

}
