package com.realestate.re.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.realestate.re.model.re.Property;

public interface PropertyRepository extends JpaRepository<Property, Long> {
    
    // public Property findByProperty(String pName);

    public Property findBypName(String pName);
}
