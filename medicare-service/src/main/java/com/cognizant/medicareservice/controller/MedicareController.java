package com.cognizant.medicareservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.medicareservice.entities.Agent;
import com.cognizant.medicareservice.entities.Doctor;
import com.cognizant.medicareservice.entities.Patient;
import com.cognizant.medicareservice.entities.User;
import com.cognizant.medicareservice.service.AgentService;
import com.cognizant.medicareservice.service.DoctorService;
import com.cognizant.medicareservice.service.PatientService;
import com.cognizant.medicareservice.service.UserService;

@RestController
@RequestMapping("/medicare")
public class MedicareController {
	@Autowired
	UserService userService;
	@Autowired
	AgentService agentService;
	@Autowired
	PatientService patientService;
	@Autowired
	DoctorService doctorService;

	@GetMapping("/users")
	public List<User> getAllUsers() {
		return userService.getAllUsers();
	}
	@PutMapping("/users/{id}")
	public void modifyStatus(@PathVariable int id)
	{
		userService.modifyStatus(id);
	}

	@GetMapping("/agents")
	public List<Agent> getAllAgents() {
		return agentService.getAllAgents();

	}

	@GetMapping("/patients")
	public List<Patient> getAllPatients() {
		return patientService.getAllPatients();

	}

	@GetMapping("/doctors")
	public List<Doctor> getAllDoctors() {
		return doctorService.getAllDoctors();

	}

	@PutMapping("/agent")
	public void modifyAgent(@RequestBody Agent agent) {
		agentService.modifyAgent(agent);
	}

	@PutMapping("/patient")
	public void modifyPatient(@RequestBody Patient patient) {
		patientService.modifyPatient(patient);
	}

	@PutMapping("/doctor")
	public void modifyDoctor(@RequestBody Doctor doctor) {
		doctorService.modifyDoctor(doctor);
	}
	
	@PutMapping("/agent/{id}")
	public void modifyAgentStatus(@PathVariable Integer id) {
		agentService.modifyAgentStatus(id);
	}

	@PutMapping("/doctor/{id}")
	public void modifyDoctorStatus(@PathVariable Integer id) {
		doctorService.modifyDoctorStatus(id);
	}

	@PutMapping("/patient/{id}")
	public void modifyPatientStatus(@PathVariable Integer id) {
		patientService.modifyPatientStatus(id);
	}
}
