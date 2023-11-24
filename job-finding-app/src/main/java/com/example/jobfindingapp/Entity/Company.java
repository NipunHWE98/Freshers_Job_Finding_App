package com.example.jobfindingapp.Entity;

import lombok.AllArgsConstructor;
import lombok.Cleanup;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Company {
    @Id
    @Column(name = "company_id", length = 10)
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer companyId;
    @Column(name = "company_name", length= 20)
    private String companyName;
    @Column(name = "company_addres",length = 30)
    private String companyAddres;
    @Column(name = "acctive",columnDefinition = "TINYINT default 1")
    private boolean Acctive;
    @Column(name = "infromation", length = 100)
    private String information;


}