import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpEventType, HttpEvent } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map } from  'rxjs/operators';

import { User } from '../models/User/user';
import { ReceivePaper } from "../models/Mokatebat/receive-paper";
import { Location } from "../models/location/location";
import { Subject } from "../models/subject/subject";
import { UserReceive } from "../models/user-receive";
import { PreText } from "../models/Pre_text/pre-text";
import { CreateSendPaper } from "../models/create_send_paper/create-send-paper";
import { SentPaperStatus } from "../models/sentpaperstatus/sent-paper-status";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // API path
  base_path = 'https://api.atomation.inaseri.ir/api/';
  token = 'token';
  is_superuser = false;
  userID: string;

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
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.error['error']}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

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
      .get<User>(this.base_path + 'mokatebat/user_info/', { headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            Authorization: 'Token ' + localStorage.getItem('token_alulbayt_automation')
          })
      })
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  users_list(): Observable<any> {
    return this.http
      .get<any>(this.base_path + 'v1/auth/user/', { headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            Authorization: 'Token ' + localStorage.getItem('token_alulbayt_automation')
          })
      })
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  create_user(item: User): Observable<User> {
    return this.http
      .post<User>(this.base_path + 'mokatebat/auth/user/register', JSON.stringify(item), { headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            Authorization: 'Token ' + localStorage.getItem('token_alulbayt_automation')
          })
      })
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  uploadUserImage(item) {
    return this.http
      .put<any>(this.base_path + 'mokatebat/user_info/' + '?token=' + localStorage.getItem('token_alulbayt_automation'), item)
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  createReceivePaper(item) {
    return this.http
      .post<ReceivePaper>(this.base_path + 'mokatebat/sendmessage/' + '?token=' + localStorage.getItem('token_alulbayt_automation'), item , {
        reportProgress: true,
        observe: 'events',
      })
      .pipe(
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
      .get<ReceivePaper>(this.base_path + 'mokatebat/sendmessage/', { headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        Authorization: 'Token ' + localStorage.getItem('token_alulbayt_automation')
       })
      })
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  create_location_send_paper(item: Location): Observable<Location> {
    return this.http
      .post<Location>(this.base_path +
        'mokatebat/sendtoorganization/location/' , JSON.stringify(item), { headers: new HttpHeaders(
            {
              'Content-Type': 'application/json',
              Authorization: 'Token ' + localStorage.getItem('token_alulbayt_automation')
            })
        })
      .pipe(
        retry(0),
        catchError(this.handleError)
      );

  }

  list_location_send_paper(): Observable<any> {
    return this.http
      .get<any>(this.base_path + 'v1/sendtoorg/location/', { headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        Authorization: 'Token ' + localStorage.getItem('token_alulbayt_automation')
        })
      })
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  create_subject_send_paper(item: Subject): Observable<Subject> {
    return this.http
      .post<Subject>(this.base_path +
        'mokatebat/sendtoorganization/subject/', JSON.stringify(item), { headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            Authorization: 'Token ' + localStorage.getItem('token_alulbayt_automation')
          })
      })
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  list_subject_send_paper(): Observable<any> {
    return this.http
      .get<any>(this.base_path + 'v1/sendtoorg/subject/',{ headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            Authorization: 'Token ' + localStorage.getItem('token_alulbayt_automation')
          })
      })
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  create_user_receive(item: UserReceive): Observable<UserReceive> {
    return this.http
      .post<UserReceive>(this.base_path + 'mokatebat/sendtoorganization/user/', JSON.stringify(item),
        { headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            Authorization: 'Token ' + localStorage.getItem('token_alulbayt_automation')
          })
        })
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  list_user_receive(): Observable<any> {
    return this.http
      .get<any>(this.base_path + 'v1/sendtoorg/user/', { headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            Authorization: 'Token ' + localStorage.getItem('token_alulbayt_automation')
          })
      })
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  list_user_receive_filter(location_id: string): Observable<any> {
    return this.http
      .get<any>(this.base_path + 'v1/sendtoorg/user/' + '?location=' + location_id, { headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            Authorization: 'Token ' + localStorage.getItem('token_alulbayt_automation')
          })
      })
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  list_assign_user(): Observable<any> {
    return this.http
      .get<any>(this.base_path + 'v1/auth/user/', { headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            Authorization: 'Token ' + localStorage.getItem('token_alulbayt_automation')
          })
      })
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  crete_assign_user(item): Observable<User> {
    return this.http
      .post<User>(this.base_path + 'mokatebat/edit_user/', item, { headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            Authorization: 'Token ' + localStorage.getItem('token_alulbayt_automation')
          })
      })
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  create_pre_text(item: PreText): Observable<PreText> {
    return this.http
      .post<PreText>(this.base_path + 'mokatebat/sendtoorganization/pishnevis', JSON.stringify(item),
        { headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            Authorization: 'Token ' + localStorage.getItem('token_alulbayt_automation')
          })
      })
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  get_pre_text(subject_id: string): Observable<any> {
    return this.http
      .get<any>(this.base_path + 'v1/sendtoorg/pishnevis/?subject_id=' + subject_id,
        { headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            Authorization: 'Token ' + localStorage.getItem('token_alulbayt_automation')
          })
      })
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  create_send_paper(item: CreateSendPaper): Observable<CreateSendPaper> {
    return this.http
      .post<CreateSendPaper>(this.base_path + 'mokatebat/sendtoorganization/create/', JSON.stringify(item),{ headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            Authorization: 'Token ' + localStorage.getItem('token_alulbayt_automation')
          })
      })
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  save_send_paper_attachment(item: any): Observable<any> {
    return this.http
      .post<any>(this.base_path + 'mokatebat/sendtoorganization/attachment/', JSON.stringify(item), { headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            Authorization: 'Token ' + localStorage.getItem('token_alulbayt_automation')
          })
      })
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  list_send_paper(): Observable<any> {
    return this.http
      .get<any>(this.base_path + 'v1/sendtoorg/paper/', { headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            Authorization: 'Token ' + localStorage.getItem('token_alulbayt_automation')
          })
      })
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  list_my_send_paper(): Observable<any> {
    return this.http
      .get<any>(this.base_path + 'v1/sendtoorg/paper/?user=' + localStorage.getItem('userID'), { headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            Authorization: 'Token ' + localStorage.getItem('token_alulbayt_automation')
          })
      })
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  view_sent_paper(id: string): Observable<any> {
    return this.http
      .get<any>(this.base_path + 'v1/sendtoorg/paper/' + id + '/', { headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            Authorization: 'Token ' + localStorage.getItem('token_alulbayt_automation')
          })
      })
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  get_notify(owner: string): Observable<any> {
    return this.http
      .get<any>(this.base_path + 'v1/notify/?owner=' + owner + '&status=0', { headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            Authorization: 'Token ' + localStorage.getItem('token_alulbayt_automation')
          })
      })
      .pipe(
        retry(0),
         catchError(this.handleError)
      );
  }

  road_notify(id: string) {
    return this.http
      .get<any>(this.base_path + 'mokatebat/notify/?id=' + id, { headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            Authorization: 'Token ' + localStorage.getItem('token_alulbayt_automation')
          })
      })
      .pipe(
        retry(0),
        catchError(this.handleError)
      );
  }

  sent_paper_status(item: SentPaperStatus) {
    return this.http
      .post<CreateSendPaper>(this.base_path + 'mokatebat/sendtoorganization/accept/', JSON.stringify(item),{ headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            Authorization: 'Token ' + localStorage.getItem('token_alulbayt_automation')
          })
      })
      .pipe(
        retry(0),
        catchError(this.handleError)
      );

  }
}
