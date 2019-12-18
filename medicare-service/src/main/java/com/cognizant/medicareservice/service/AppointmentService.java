package com.cognizant.medicareservice.service;

import javax.validation.Valid;

import com.cognizant.medicareservice.entities.Appoinment;

public interface AppointmentService {

public	void add(@Valid Appoinment appointment);

}
