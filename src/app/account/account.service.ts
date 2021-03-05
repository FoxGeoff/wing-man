import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, filter, catchError, tap } from 'rxjs/operators';
import { Account } from '../data/interface/account';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  accountesUrl = 'api/accounts';

  constructor(private http: HttpClient) { }

  /** Alternative functions - ref. https://www.techiediaries.com/angular-inmemory-web-api/
   * TODO: Re-factor DRY and use 'shared/repositoryService' and deprecate this service
   */
  public getAccounts() {
    return this.http.get(this.accountesUrl);
  }

  public getAccount(accountId) {
    return this.http.get(`${this.accountesUrl}/${accountId}`);
  }
  public createAccount(account: Account) {
    return this.http.post(`${this.accountesUrl}`, account);
  }

  public deleteAccount(accountId) {
    return this.http.delete(`${this.accountesUrl}/${accountId}`);
  }

  /** PUT: update the account on the server. Returns the updated account upon success. */
  public updateAccount(account: Account): Observable<Account> {
    return this.http.put<Account>(`${this.accountesUrl}/${account.id}`, account, httpOptions)
      .pipe(
        tap(() => console.log('Updated Account: ', JSON.stringify(account))),
        catchError(this.handleError),
      );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }

  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }

}
