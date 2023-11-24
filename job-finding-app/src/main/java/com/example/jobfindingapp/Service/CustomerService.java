package com.example.jobfindingapp.Service;

import com.example.jobfindingapp.Dto.CustomerDto;
import com.example.jobfindingapp.Dto.CustomerUpdate;


public interface CustomerService {
    String saveCustomer(CustomerDto customerDto);

    CustomerUpdate updateCustomer(CustomerUpdate customerUpdate);
}
