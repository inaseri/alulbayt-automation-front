import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpEventType, HttpEvent } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map } from  'rxjs/operators';

import { User } from '../models/User/user';
import { ReceivePaper } from "../models/Mokatebat/receive-paper";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // API path
  base_path = 'https://api.atomation.inaseri.ir/api/';
  token = 'token';

  public user = localStorage.getItem('user_id');
  public isUserLoggedIn: boolean;

  constructor(private http: HttpClient) {}

  // Http Options
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }


  // Login a user
  get_key(item): Observable<User> {
    return this.http
      .post<User>(this.base_path + 'mokatebat/getkey/', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError),
      );
  }

  login(item): Observable<User> {
    return this.http
      .post<User>(this.base_path + 'mokatebat/login/', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  userInfo(): Observable<User> {
    return this.http
      .get<User>(this.base_path + 'mokatebat/user_info/' + '?token=' + localStorage.getItem('token'), this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  uploadUserImage(item) {
    return this.http
      .put<any>(this.base_path + 'mokatebat/user_info/' + '?token=' + localStorage.getItem('token'), item)
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }


  // Mokatebat specific api
  createSendPapper(item) {
    return this.http
      .post<ReceivePaper>(this.base_path + 'mokatebat/sendmessage/' + '?token=' + localStorage.getItem('token'), item , {
        reportProgress: true,
        observe: 'events'
      }).pipe(
        map(event => this.getEventMessage(event, item)),
        catchError(this.handleError)
      );
  }

  private getEventMessage(event: HttpEvent<any>, formData) {
    switch (event.type) {
      case HttpEventType.UploadProgress:
        return this.fileUploadProgress(event);
        break;
      case HttpEventType.Response:
        return this.apiResponse(event);
        break;
      default:
        return `File "${formData.get('image').name}" surprising upload event: ${event.type}.`;
    }
  }

  private fileUploadProgress(event) {
    const percentDone = Math.round(100 * event.loaded / event.total);
    return { status: 'progress', message: percentDone };
  }

  private apiResponse(event) {
    return event.status;
  }

  getListRecievePaper(): Observable<ReceivePaper> {
    return this.http
      .get<ReceivePaper>(this.base_path + 'mokatebat/sendmessage/' + '?token=' + localStorage.getItem('token'))
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }


}
