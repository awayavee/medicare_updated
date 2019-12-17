import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './site/login/login.component';
import { AdminSignupComponent } from './site/admin-signup/admin-signup.component';
import { PatientSignupComponent } from './site/patient-signup/patient-signup.component';
import { AgentSignupComponent } from './site/agent-signup/agent-signup.component';
import { DoctorSignupComponent } from './site/doctor-signup/doctor-signup.component';
import { CarouselComponent } from './site/carousel/carousel.component';
import { SignupOptionComponent } from './site/signup-option/signup-option.component';
import { HomeComponent } from './home/home/home.component';
import { DoctorHomeComponent } from './home/doctor-home/doctor-home.component';
import { PatientHomeComponent } from './home/patient-home/patient-home.component';
import { AdminHomeComponent } from './home/admin-home/admin-home.component';
import { AgentHomeComponent } from './home/agent-home/agent-home.component';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { DoctorEditComponent } from './doctor/doctor-edit/doctor-edit.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientEditComponent } from './patient/patient-edit/patient-edit.component';
import { AppointmentComponent } from './appointment/appointment.component';



const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:PatientSignupComponent},
  {path:'adminSignup', component:AdminSignupComponent},
  {path:'doctorSignup', component:DoctorSignupComponent},
  {path:'patientSignup', component:PatientSignupComponent},
  {path:'agentSignup', component:AgentSignupComponent},
  {path:'signupOption', component:SignupOptionComponent},
  {path:'doctorEdit/:id',component:DoctorEditComponent},
  {path:'patientEdit/:id',component:PatientEditComponent},
  {path:'doctorHome', component:DoctorHomeComponent},
  {path:'patientHome', component:PatientHomeComponent},
  {path:'adminHome', component:AdminHomeComponent},
  {path:'doctorList', component:DoctorListComponent},
  {path:'agentHome', component:AgentHomeComponent},
  {path:'patientList', component:PatientListComponent},
  {path:'appointment/:id', component:AppointmentComponent}
  //{path:'agentList', component:AgentListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
