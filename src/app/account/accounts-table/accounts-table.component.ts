import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
// chk box section
import {SelectionModel} from '@angular/cdk/collections';

import { Account } from '../../data/Models/account';

/**
 * @title Data table with select, sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-accounts-table',
  templateUrl: './accounts-table.component.html',
  styleUrls: ['./accounts-table.component.css']
})
export class AccountsTableComponent implements OnInit, AfterViewInit {

  @Input() accounts: Account[];

  displayedColumns: string[] = ['select', 'name', 'description', 'details', 'update', 'delete'];
  dataSource: MatTableDataSource<Account>;
  selection = new SelectionModel<Account>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Account>(this.accounts);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Account): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  /** Detail, Update and Delete stubs */
  public redirectToDetails = (id: string) => {
    console.log(`Detail item ${id}`);
  }

  public redirectToUpdate = (id: string) => {
    console.log(`Update item ${id}`);

  }

  public redirectToDelete = (id: string) => {
    console.log(`Delete item ${id}`);
  }

}

