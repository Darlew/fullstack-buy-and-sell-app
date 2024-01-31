import { Injectable } from '@angular/core';
import { Listing } from './types';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaderResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

const HttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ListingsService {
  listings: Listing[] = [];

  constructor(private http: HttpClient) {}

  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>('/api/listings');
  }

  getListingById(id: string): Observable<Listing> {
    return this.http.get<Listing>(`/api/listings/123`);
  }

  addViewToListing(id: string): Observable<Listing> {
    return this.http.post<Listing>(
      `/api/listings/${id}/add-view`,
      {},
      HttpOptions
    );
  }

  getListingsForUser(): Observable<Listing[]> {
    return this.http.get<Listing[]>('/api/users/12345/listings');
  }

  deleteListing(id: string): Observable<any> {
    return this.http.delete(`/api/listings/${id}`);
  }

  createListing(
    name: string,
    description: string,
    price: number
  ): Observable<Listing> {
    return this.http.post<Listing>(
      '/api/listings',
      { name, description, price },
      HttpOptions
    );
  }
}
