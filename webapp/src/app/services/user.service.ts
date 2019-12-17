import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserAuthService } from './user-auth.service';
import { User } from '../model/user.model';
import { Subject } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    baseUrl=environment.baseUrl;
    filter=new Subject();

    constructor(private http:HttpClient, private userAuthService:UserAuthService) {
    }

    getUser(username:string):Observable<any>{

        const httpOptions={
            headers:new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':'Bearer '+ this.userAuthService.getToken()
            })
        };

        return this.http.get<any>(`${this.baseUrl+ "/users"}/${username}`, httpOptions);

    }

    addUser(user:User){

        return this.http.post(this.baseUrl+"/users", user);
    }


    
}

