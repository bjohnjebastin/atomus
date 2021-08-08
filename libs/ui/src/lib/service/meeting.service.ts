/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meeting } from '@atomus/api-interface';

@Injectable({
    providedIn: 'root'
})
export class MeetingService {
    constructor(private http: HttpClient) {
    }

    bookMeeting(meeting: Meeting): Observable<any>{
        const headers = new HttpHeaders()
          .set('Content-Type', 'application/json');
               
        console.log(JSON.stringify(meeting));
        return this.http.post<any>(
            'http://localhost:3333/api/summary', JSON.stringify(meeting), { headers: headers }
        );
    }
}
