package com.demo.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Flower
{
  @Id
    private int flowerid;
	private String flowername;
	private double flowerprice;
	
	
	public Flower() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Flower(int flowerid, String flowername, double flowerprice) {
		super();
		this.flowerid = flowerid;
		this.flowername = flowername;
		this.flowerprice = flowerprice;
	}


	public int getFlowerid() {
		return flowerid;
	}


	public void setFlowerid(int flowerid) {
		this.flowerid = flowerid;
	}


	public String getFlowername() {
		return flowername;
	}


	public void setFlowername(String flowername) {
		this.flowername = flowername;
	}


	public double getFlowerprice() {
		return flowerprice;
	}


	public void setFlowerprice(double flowerprice) {
		this.flowerprice = flowerprice;
	}
	
	
	
}
