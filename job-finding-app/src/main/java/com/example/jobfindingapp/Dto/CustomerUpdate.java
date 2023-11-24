package com.example.jobfindingapp.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
@NoArgsConstructor
@AllArgsConstructor
@Data
public class CustomerUpdate {
    private String name;
    private String userName;
    private String password;
    private String firstEmail;
    private String secoundEmaill;
    private String addres;
    private String jobRole;
    private String cv;
    private String githubLink;
    private String linkin;
}
