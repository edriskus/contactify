import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './contacts.types';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(
    private http: HttpClient
  ) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>('/assets/contacts.json');
  }
}
