import { Component, OnInit } from '@angular/core';
import { DropdownItem } from '../../shared/dropdown/dropdown.component';

export interface HeaderTab {
  name: string;
  link: string;
}

export interface User {
  name: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  tabs: HeaderTab[] = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Contacts', link: '/contacts' },
    { name: 'Notifications', link: '/notifications' }
  ]

  user: User = {
    name: 'Jorah Mormont'
  }

  dropdownItems: DropdownItem[] = [
    { title: 'Groups' },
    { title: 'Frequently contacted' },
    { title: 'Preferences' },
    { title: 'Log out' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
