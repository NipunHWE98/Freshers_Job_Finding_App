package com.example.jobfindingapp.Dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Id;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class CustomerDto {
    private String name;
    private String userName;
    private String password;
    private String firstEmail;
}

