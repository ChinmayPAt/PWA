import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

export type APIRequest = {
  url: string;
  payload?: any;
  params?: Record<string, string>;
};

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private httpClient = inject(HttpClient);

  getData(request: APIRequest) {
    return this.httpClient.get(request.url).pipe(tap(resp => console.log(resp)));
  }
}
