import { Component, OnInit, Input } from '@angular/core';

export interface DropdownItem {
  title: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() title: string;
  @Input() items: DropdownItem[];

  dropdownOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  openItem(item: DropdownItem): void {
    this.toggleDropdown();
  }

}
