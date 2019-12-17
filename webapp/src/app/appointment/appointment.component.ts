import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DoctorService } from '../services/doctor.service';
import { Doctor } from '../model/doctor.model';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

 
  appointmentForm:FormGroup;
  doctorEdited=false;
  id:number;
  doctors:Doctor[];
  constructor(private route:ActivatedRoute,private doctorService:DoctorService, private router:Router) { }

  ngOnInit() {


    this.appointmentForm=new FormGroup({
    'patientFirstName': new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z0-9]+$'), Validators.maxLength(50)]),
    'patientLastName': new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z0-9]+$'), Validators.maxLength(50)]),
    'bookingDate': new FormControl(null, [Validators.required]),
    'appointmentDate': new FormControl(null, [Validators.required]),
    'medicareService':new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z0-9]+$'), Validators.maxLength(50)]),
    'doctor': new FormControl(null, [Validators.required,Validators.maxLength(20)]),
  
  });
  // this.route.params.subscribe((params: Params) => {
  //   const doctorId = params['id']
  //   console.log(doctorId);
  //   console.log("helllo doctor edit");
  //   this.doctorService.getDoctor(doctorId).subscribe((doctor: Doctor) => {
  //     console.log("helllooooooooooo"+doctor);
  //     if (doctor) {

  //       doctor.dateOfBirth = new Date(doctor.dateOfBirth)
  //       this.doctorId=doctor.id
  //       this.doctorEditForm.patchValue({

  //         firstname:doctor.firstName,
  //         lastname:doctor.lastName,
  //         age:doctor.age,
  //         gender:doctor.gender,
  //         dateOfBirth:doctor.dateOfBirth.toISOString().slice(0, 10), 
  //         contactNo:doctor.contactNo,
  //         altContactNo:doctor.altContactNo,
  //         email:doctor.email,
  //         password:doctor.password,
  //         address1:doctor.address1,
  //         address2:doctor.address2,
  //         city:doctor.city,
  //         state:doctor.state,
  //         zipCode:doctor.zipCode,
  //         degree:doctor.degree,
  //         speciality:doctor.speciality,
  //         workHours:doctor.workHours,
  //         hospitalName:doctor.hospitalName
  //       }
  //       )
  //       console.log(doctor.firstName);
  //     }

  //   })
  // })
    
}

onAppointmentFormSubmit(){
  // this.doctorEdited=true
  // this.updatedDoctorItem={
  //   id:this.doctorId,
  //   firstName:this.doctorEditForm.value.firstname,
  //   lastName:this.doctorEditForm.value.lastname,
  //   age:this.doctorEditForm.value.age,
  //   gender:this.doctorEditForm.value.gender,
  //   dateOfBirth:this.doctorEditForm.value.dateOfBirth,
  //   contactNo:this.doctorEditForm.value.contactNo,
  //   altContactNo:this.doctorEditForm.value.altContactNo,
  //   email:this.doctorEditForm.value.email,
  //   password:this.doctorEditForm.value.password,
  //   address1:this.doctorEditForm.value.address1,
  //   address2:this.doctorEditForm.value.address2,
  //   city:this.doctorEditForm.value.city,
  //   state:this.doctorEditForm.value.state,
  //   zipCode:this.doctorEditForm.value.zipcode,
  //   degree:this.doctorEditForm.value.degree,
  //   speciality:this.doctorEditForm.value.speciality,
  //   workHours:this.doctorEditForm.value.workHours,
  //   hospitalName:this.doctorEditForm.value.hospitalName
  // }
  // this.doctorService.updateDoctor(this.updatedDoctorItem).subscribe(data=>{
  //   console.log("subscribed in doctor edit");
  // })
}


get patientFirstName(){
  return this.appointmentForm.get('patientFirstName');
}
get patientLastName(){
  return this.appointmentForm.get('patientLastName');
}
get bookingDate(){
  return this.appointmentForm.get('bookingDate');
}
get appointmentDate(){
  return this.appointmentForm.get('appointmentDate');
}
get medicareService(){
  return this.appointmentForm.get('medicareService');
}
get doctor(){
  return this.appointmentForm.get('doctor');
}
}