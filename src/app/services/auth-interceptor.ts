import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

export class AuthInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');
        let headers = req.headers.set('Authorization', token)
        const authReq = req.clone({
            headers: headers
        });
        return next.handle(authReq);
    }
}