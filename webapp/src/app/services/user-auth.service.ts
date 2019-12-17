import { Injectable } from "@angular/core";
import { User } from '../model/user.model';

@Injectable ({
    providedIn:'root'
})

export class UserAuthService{

    loggedIn:boolean;
    
    role:string;
    redirectUrl:'/';
    token:string;
    user:string;

    constructor(){}

  


    public getToken(){
        return this.token;
    }
    public setToken(token :string){
        this.token=token
    }

    public getRole(){
        return this.role;
    }

    public setRole(role:string){
        this.role=role
    }

    public getUser(){
        return this.user;
    }

    public setUser(user:string){
        this.user=user
    }

    set username(username:string) {
        this.username=username;
      }
    
      set firstname(firstname:string) {
       this.firstname=firstname
      }
      set lastname(lastname:string) {
       this.lastname=lastname;
      }

    logOut(){
        this.redirectUrl='/';
        this.user=null;
        this.role=null;
        this.loggedIn=false;
    }

}