import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { ILogin } from 'src/Interfaces/ILogin';
import { IRegister } from 'src/Interfaces/IRegister';

@Injectable({
   providedIn: 'root'
})
export class AuthService {
   loginUrl = 'http://localhost:5010/Account/Login';
   registerUrl = 'http://localhost:5010/Account/Register';
   constructor(private http: HttpClient) { }

   token: string = '';
   result: any;
   isAuth: boolean = false;
   check() {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve(this.isAuth);
         }, 1000);
      });
   }
   login(loginValue:ILogin):boolean {
      let params = new HttpParams();
      params = params.append('q',  JSON.stringify(loginValue));
      this.http.get<string>(this.registerUrl,{ params: params }).subscribe(
         (data) => { this.token = data },
         (error) => { this.token = 'Error' }
      );
      if (this.token == 'Error') {
         this.isAuth = false;
         return false;
      }
      else {
         this.isAuth=true
         return true;
      }
   }
   register(response:IRegister):boolean {
      let params = new HttpParams();
      params = params.append('q',  JSON.stringify(response));
      this.http.get<string>(this.loginUrl,{ params: params }).subscribe(
         (error) => { this.token = 'Error' }
      );
      if (this.token == 'Error') {
         this.isAuth = false;
         return false;
      }
      else {
         return true;
      }
   }
   logout() {
      this.isAuth = false;
   }
}
