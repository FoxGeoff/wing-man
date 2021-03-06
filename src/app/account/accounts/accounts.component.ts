import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RepositoryService } from 'src/app/shared/repository.service';
import { Account } from '../../data/Models/account';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit, AfterViewInit {

  accounts: Account[];

  constructor(private reproService: RepositoryService) { }

  ngOnInit(): void {
    this.getAllAccounts();
  }

  getAllAccounts() {
    this.reproService.getData('api/accounts')
      .subscribe(
        (data: Account[]) => {
          this.accounts = data;
          // debug
          console.log(`Accounts Page: ${JSON.stringify(data)}`);
        }
      );
  }

  ngAfterViewInit() { }

}
