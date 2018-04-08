import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";


@Injectable()
export class BookService {
    constructor(private http: HttpClient) {
    }
    
    cars = [
        'Ford','Chevrolet','Buick'
    ];
    
    getData() {
        /*
        let headers = new HttpHeaders;
        const fortniteHeader = {'TRN-Api-Key':'20eac5a4-2284-4267-bcfc-96b30c9613a1'};
        headers.append('Access-Control-Allow-Origin','*');
        headers.append('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
        headers.append('token','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Im9zY2FyIiwiZXhwIjoxNTIzMTIzODM5fQ.UUiR2ReYyKuuhF24IoG-f6p9WSNzS6C-02o1nNniHMM');
        //let header = new HttpHeaders();
        //let other_header = header.append('TRN-Api-Key','20eac5a4-2284-4267-bcfc-96b30c9613a1');
        //let other_header = header.append('Access-Control-Allow-Origin','*');
        //other_header = header.append('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
        const header = new HttpHeaders(fortniteHeader);
        */
       const headers = new HttpHeaders({
           'Authorization':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Im9zY2FyIiwiZXhwIjoxNTIzMTg5NTY3fQ.1_1bhnkucLGNc0iQTKRa4hc4c3LezCztU4s6Z0J_Y-Q'
        });

        //return this.http.get('http://localhost:8080/api/books', {headers});
        return "Hola, soy service";
    }
    
 }