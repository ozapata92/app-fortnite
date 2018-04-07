import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class BookService {
    constructor(private http: HttpClient) {
    }

    getData(): Observable<String[]> {
        let headers = new HttpHeaders;
        headers.append('Access-Control-Allow-Origin','* ');
        headers.append('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
        headers.append('token','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Im9zY2FyIiwiZXhwIjoxNTIzMTIzODM5fQ.UUiR2ReYyKuuhF24IoG-f6p9WSNzS6C-02o1nNniHMM');

        let header = new HttpHeaders();
        let other_header = header.append('Authorization','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Im9zY2FyIiwiZXhwIjoxNTIzMTMyNjU0fQ.C-ZWLaqADhQeVC9mA8y3dLIlG-fLCFlH0-J-NztQXPQ');

        return this.http
        .get<String[]>('http://localhost:8080/api/books',{headers:other_header});
    }
    
 }