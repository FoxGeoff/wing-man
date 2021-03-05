import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RepositoryService } from 'src/app/shared/repository.service';
import { Account } from '../../data/interface/account';

export class AccountList implements Account {
  id: 1;
  name: 'none';
  description: 'none';
  street: 'none';
  city: 'none';
  state: 'none';
  zip: 0;
  country: 'none';
  paymentTerms: 'none';
  email: 'none';
  phone: 0;
}


/**
 * @title Data table with select, sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit, AfterViewInit {

  accounts = {} as Account[];

  displayedColumns: string[] = ['select', 'name', 'description', 'details', 'update', 'delete'];
  dataSource: MatTableDataSource<Account>;
  selection = new SelectionModel<Account>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  isNoData = true;

  constructor(private reproService: RepositoryService) {

    // this.dataSource = new MatTableDataSource(this.accounts);

  }

  ngOnInit(): void {
    this.reproService.getData('api/accounts')
      .subscribe(
        (data: Account[]) => {
          this.accounts = data;
          console.log(data);
          this.dataSource = new MatTableDataSource(data);
          this.isNoData = false;
        }
      );
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
