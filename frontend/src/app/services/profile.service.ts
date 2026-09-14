import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, of, shareReplay } from 'rxjs';
import { environment } from '../../environments/environment';
import { Profile } from '../models/profile.model';
import { FALLBACK_PROFILE } from '../data/fallback-profile';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private readonly http = inject(HttpClient);
  private profile$?: Observable<Profile>;

  getProfile(): Observable<Profile> {
    this.profile$ ??= this.http.get<Profile>(`${environment.apiUrl}/profile`).pipe(
      catchError(() => of(FALLBACK_PROFILE)),
      shareReplay(1)
    );
    return this.profile$;
  }

  sendContact(payload: { name: string; email: string; message: string }): Observable<unknown> {
    return this.http.post(`${environment.apiUrl}/contact`, payload);
  }
}
