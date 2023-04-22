package com.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.entity.Flower;

@Repository
public interface FlowerRepository extends JpaRepository<Flower,Integer>{

}
