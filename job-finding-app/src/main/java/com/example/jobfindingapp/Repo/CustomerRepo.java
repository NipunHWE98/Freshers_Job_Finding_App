package com.example.jobfindingapp.Repo;

import com.example.jobfindingapp.Entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface CustomerRepo extends JpaRepository<Customer,Integer> {

    boolean findByUserNameEquals(String userName);

    Customer findByUserNameEqualsAndNameEquals(String userName, String name);
}