import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'http://localhost:5068/api/Profile/GetString';

  constructor(private http: HttpClient) { }

  getString() {
    return this.http.get<string>(this.apiUrl, { responseType: 'text' as 'json' }).pipe(
      catchError(err => {
        console.error('Error:', err);
        return of('');
      })
    );
  }
}
