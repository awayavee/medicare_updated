package com.cognizant.medicareservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.medicareservice.entities.User;
import com.cognizant.medicareservice.reporities.UserRepository;
@Service
public class UserServiceImpl implements UserService {
@Autowired
UserRepository userRepository;
	@Override
	public List<User> getAllUsers() {
		
	return 	userRepository.findAll();
	}
	@Override
	public void modifyStatus(int id) {
	User user=userRepository.findByUserId(id);
	user.setStatus(!user.isStatus());
	userRepository.save(user);
		
	}

}
