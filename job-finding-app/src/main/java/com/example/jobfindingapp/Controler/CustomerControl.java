package com.example.jobfindingapp.Controler;

import com.example.jobfindingapp.Dto.CustomerDto;
import com.example.jobfindingapp.Dto.CustomerUpdate;
import com.example.jobfindingapp.Service.CustomerService;
import evenbeen.JobFindingApp.config.StandedResponce;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/customer")
public class CustomerControl {
    @Autowired
    CustomerService customerService;
    @PostMapping("save")
    public ResponseEntity<StandedResponce> saveCustomer(@RequestBody CustomerDto customerDto){
        String massage = customerService.saveCustomer(customerDto);
        return new ResponseEntity<StandedResponce>( new StandedResponce(201,"succes",massage), HttpStatus.CREATED);
    }
    @PostMapping("update")
    public ResponseEntity<StandedResponce> updateCustomer(@RequestBody CustomerUpdate customerUpdate){
        CustomerUpdate customerUpdate1 = customerService.updateCustomer(customerUpdate);
        return new ResponseEntity<>(new StandedResponce(201,"succes",customerUpdate1),HttpStatus.OK);
    }
}