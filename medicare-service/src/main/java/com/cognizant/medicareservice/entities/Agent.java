package com.cognizant.medicareservice.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "agent")
public class Agent {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ag_id")
	private int id;
	@Column(name = "ag_first_name")
	private String firstName;
	@Column(name = "ag_last_name")
	private String lastName;
	@Column(name = "ag_age")
	private int age;
	@Column(name = "ag_gender")
	private String gender;
	@Column(name = "ag_date_of_birth")
	private Date dateOfBirth;
	@Column(name = "ag_contact_no")
	private String contactNo;
	@Column(name = "ag_alt_contact_no")
	private String altContactNo;
	@Column(name = "ag_email")
	private String email;
	@Column(name = "ag_password")
	private String password;
	@Column(name = "ag_address_1")
	private String address1;
	@Column(name = "ag_address_2")
	private String address2;
	@Column(name = "ag_city")
	private String city;
	@Column(name = "ag_state")
	private String state;
	@Column(name = "ag_zipcode")
	private String zipCode;


	public Agent() {
		super();
	}

	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	public String getAltContactNo() {
		return altContactNo;
	}

	public void setAltContactNo(String altContactNo) {
		this.altContactNo = altContactNo;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAddress1() {
		return address1;
	}

	public void setAddress1(String address1) {
		this.address1 = address1;
	}

	public String getAddress2() {
		return address2;
	}

	public void setAddress2(String address2) {
		this.address2 = address2;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}



	@Override
	public String toString() {
		return "Agent [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", age=" + age + ", gender="
				+ gender + ", dateOfBirth=" + dateOfBirth + ", contactNo=" + contactNo + ", altContactNo="
				+ altContactNo + ", email=" + email + ", password=" + password + ", address1=" + address1
				+ ", address2=" + address2 + ", city=" + city + ", state=" + state + ", zipCode=" + zipCode + "]";
	}

}
