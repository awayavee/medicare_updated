package com.cognizant.medicareservice.service;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.medicareservice.entities.Appoinment;
@Service
public class AppointmentServiceImpl implements AppointmentService {
@Autowired
private AppointmentRepository appointmentRepository;
	@Transactional
	public void add(@Valid Appoinment appointment) {
	appointmentRepository.save(appointment);
		
	}

}
