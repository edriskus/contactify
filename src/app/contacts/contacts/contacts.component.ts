import { Component, OnInit } from '@angular/core';
import { Filter } from '../../datatable/filter/filter.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  filters: Filter[] = [
    { placeholder: 'Name', key: 'name', columnSpan: 4 },
    { placeholder: 'City', key: 'city', columnSpan: 3 }
  ]

  constructor() { }

  ngOnInit() {
  }

}
