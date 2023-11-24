package com.example.jobfindingapp.mappers;

import com.example.jobfindingapp.Dto.CustomerDto;
import com.example.jobfindingapp.Dto.CustomerUpdate;
import com.example.jobfindingapp.Entity.Customer;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface customermapper {

    Customer customerdtoTocustomer(CustomerDto customerDto);

    Customer customerupdatedtoTocustomer(CustomerUpdate customerUpdate);

    CustomerUpdate customerTocustomerDto(Customer customer);
}
