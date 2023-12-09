package com.example.jobfindingapp.mappers;

import com.example.jobfindingapp.Dto.CustomerDto;
import com.example.jobfindingapp.Dto.CustomerUpdate;
import com.example.jobfindingapp.Entity.Customer;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-12-04T23:01:39+0530",
    comments = "version: 1.4.2.Final, compiler: Eclipse JDT (IDE) 3.36.0.v20231030-1524, environment: Java 17.0.9 (Eclipse Adoptium)"
)
@Component
public class customermapperImpl implements customermapper {

    @Override
    public Customer customerdtoTocustomer(CustomerDto customerDto) {
        if ( customerDto == null ) {
            return null;
        }

        Customer customer = new Customer();

        customer.setFirstEmail( customerDto.getFirstEmail() );
        customer.setName( customerDto.getName() );
        customer.setPassword( customerDto.getPassword() );
        customer.setUserName( customerDto.getUserName() );

        return customer;
    }

    @Override
    public Customer customerupdatedtoTocustomer(CustomerUpdate customerUpdate) {
        if ( customerUpdate == null ) {
            return null;
        }

        Customer customer = new Customer();

        customer.setAddres( customerUpdate.getAddres() );
        customer.setCv( customerUpdate.getCv() );
        customer.setFirstEmail( customerUpdate.getFirstEmail() );
        customer.setGithubLink( customerUpdate.getGithubLink() );
        customer.setJobRole( customerUpdate.getJobRole() );
        customer.setLinkin( customerUpdate.getLinkin() );
        customer.setName( customerUpdate.getName() );
        customer.setPassword( customerUpdate.getPassword() );
        customer.setSecoundEmaill( customerUpdate.getSecoundEmaill() );
        customer.setUserName( customerUpdate.getUserName() );

        return customer;
    }

    @Override
    public CustomerUpdate customerTocustomerDto(Customer customer) {
        if ( customer == null ) {
            return null;
        }

        CustomerUpdate customerUpdate = new CustomerUpdate();

        customerUpdate.setAddres( customer.getAddres() );
        customerUpdate.setCv( customer.getCv() );
        customerUpdate.setFirstEmail( customer.getFirstEmail() );
        customerUpdate.setGithubLink( customer.getGithubLink() );
        customerUpdate.setJobRole( customer.getJobRole() );
        customerUpdate.setLinkin( customer.getLinkin() );
        customerUpdate.setName( customer.getName() );
        customerUpdate.setPassword( customer.getPassword() );
        customerUpdate.setSecoundEmaill( customer.getSecoundEmaill() );
        customerUpdate.setUserName( customer.getUserName() );

        return customerUpdate;
    }
}
