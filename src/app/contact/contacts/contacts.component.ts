import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts = [
    {
      name: 'Fred Blogs',
      email: 'fred@gmail.com',
      account: 'The AMC LLC',
      accountId: 1,
      address: '123 Main St, San Diego, CA 92126',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Daffy Duck',
      email: 'daffy@gmail.com',
      account: 'International Ducks Inc',
      accountId: 2,
      address: '123 Main St, San Diego, CA 92126',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Joe Blow',
      email: 'joe@gmail.com',
      account: 'Huff and Puff of America Inc',
      accountId: 3,
      address: '123 Main St, San Diego, CA 92126',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Fred Blogs',
      email: 'fred@gmail.com',
      account: 'The AMC LLC',
      accountId: 4,
      address: '123 Main St, San Diego, CA 92126',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Daffy Duck',
      email: 'daffy@gmail.com',
      account: 'International Ducks Inc',
      accountId: 5,
      address: '123 Main St, San Diego, CA 92126',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Joe Blow',
      email: 'joe@gmail.com',
      account: 'Huff and Puff of America Inc',
      accountId:6,
      address: '123 Main St, San Diego, CA 92126',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Fred Blogs',
      email: 'fred@gmail.com',
      account: 'The AMC LLC',
      accountId: 7,
      address: '123 Main St, San Diego, CA  92126',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Daffy Duck',
      email: 'daffy@gmail.com',
      account: 'International Ducks Inc',
      accountId: 8,
      address: '123 Main St, San Diego, CA 92126',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Joe Blow',
      email: 'joe@gmail.com',
      account: 'Huff and Puff of America Inc',
      accountId: 9,
      address: '123 Main St, San Diego, CA 92126',
      updated: new Date('1/28/16'),
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
