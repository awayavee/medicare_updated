import { Subject } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { UserAuthService } from './user-auth.service'
import { Appointment } from '../model/appointment.model'

@Injectable({
    providedIn: 'root'
})

export class AppointmentService{
    filter=new Subject()
    baseUrl=environment.baseUrlMedicare

    constructor(private http:HttpClient, private userAuthService:UserAuthService){}
    addAppointment(appointment:Appointment){
    
        const httpOptions={
            headers:new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':'Bearer '+ this.userAuthService.getToken()
            })
        };

        return this.http.post<void>(`${this.baseUrl}/medicare/appointment`, appointment,httpOptions);
    }
}