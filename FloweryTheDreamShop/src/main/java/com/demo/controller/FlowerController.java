package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.entity.Flower;
import com.demo.repository.FlowerRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class FlowerController 
{
	@Autowired
	private FlowerRepository frepository;
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/insertflower")
	public Flower insertdish(@RequestBody Flower f1) {
		return this.frepository.save(f1);
	}
	
	
	
	@CrossOrigin(origins="http://localhost:4200")	
	@PostMapping("/updateflower")
	public Flower updatedish(@RequestBody Flower f2) {
		return this.frepository.save(f2);
	}
	
	
	@CrossOrigin(origins="http://localhost:4200")	
	@PostMapping("/deleteflower")
	public void deletedish(@RequestBody Flower f3) {
		frepository.delete(f3);
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/viewflower")
	public java.util.List<Flower> viewflower()
	{
		return frepository.findAll();
	}

}