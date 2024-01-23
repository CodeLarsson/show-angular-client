import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cat } from '../model/cat';

@Injectable({
  providedIn: 'root',
})
export class CatServiceService {
  private readonly url = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) {}

  getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(`${this.url}/cats`);
  }

  addCat(cat: Cat): Observable<Cat> {
    return this.http.post<Cat>(`${this.url}/cats`, cat);
  }

  deleteCat(id: string): Observable<Cat> {
    return this.http.delete<Cat>(`${this.url}/cats/${id}`);
  }

  updateCat(cat: Cat): Observable<Cat> {
    return this.http.put<Cat>(`${this.url}/cats/${cat.id}`, cat);
  }

  getCatById(id: string): Observable<Cat> {
    return this.http.get<Cat>(`${this.url}/cats/${id}`);
  }

  adoptCat(id: string): Observable<Cat> {
    return this.http.patch<Cat>(`${this.url}/cats/adopt${id}`, null);
  }

  getAdoptedCats(): Observable<Cat> {
    return this.http.get<Cat>(`${this.url}/cats/adopt/adopted`);
  }

  getNotAdoptedCats(): Observable<Cat> {
    return this.http.get<Cat>(`${this.url}/cats/adopt/notadopted`);
  }
}
