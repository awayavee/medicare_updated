import { Doctor } from './doctor.model';
import { User } from './user.model';

export interface Appointment
{
    id ?:number;
    patientFirstName:string;
    patientLastName:string;
    bookingDate:Date;
    AppointmentDate:Date;
    status?:boolean;
    doctor:Doctor;
    user:User;


}