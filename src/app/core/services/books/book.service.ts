import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

const appKey = "kid_Bkm4aEtmM" // APP KEY HERE;
const appSecret = "ca47356218f045758a94ea07019ab4ab" // APP SECRET HERE;
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;
const host = `https://baas.kinvey.com/appdata`;

@Injectable()
export class BooksService {

    constructor(private http: HttpClient) {
    }

    getBooks(): Observable<any> {
        return this.http.get(`${host}/${appKey}/books`, {
            headers: new HttpHeaders().set('Authorization', 'Basic ' + btoa(`ani:ani`))
              .set('Content-Type', 'application/json')
          });
    }

    addBook(bookModel): Observable<any> {
        const body = JSON.stringify(bookModel);      
        console.log(localStorage.getItem('authtoken'))  
        return this.http.post(`${host}/${appKey}/books`, body, {
          headers: new HttpHeaders().set('Authorization', 'Kinvey ' + localStorage.getItem('authtoken'))
            .set('Content-Type', 'application/json')
        });
      }

      deleteBook(id, authtoken): Observable<any> {
        return this.http.delete(`${host}/${appKey}/books/${id}`, {
          headers: new HttpHeaders().set('Authorization', 'Kinvey ' + authtoken)
        });
      }

      detailsBooks(id): Observable<any> {
        return this.http.get(`${host}/${appKey}/books/${id}`, {
            headers: new HttpHeaders().set('Authorization', 'Basic ' + btoa(`ani:ani`))
              .set('Content-Type', 'application/json')
          });
      }

      updateBook(id, obj, authtoken): Observable<any> {
        return this.http.put(`${host}/${appKey}/books/` + id, JSON.stringify(obj), {
          headers: new HttpHeaders().set('Authorization', 'Kinvey ' + authtoken)
            .set('Content-Type', 'application/json')
        });
      }
      
}