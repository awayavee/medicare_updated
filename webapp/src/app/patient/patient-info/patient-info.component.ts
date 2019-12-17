import { Component, OnInit, Input } from '@angular/core';
import { Patient } from 'src/app/model/patient.model';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {
  @Input() patient:Patient;
  constructor() { }

  ngOnInit() {
  }

}
