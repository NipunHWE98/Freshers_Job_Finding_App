package com.example.jobfindingapp.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "Customer")
public class Customer {
    @Id
    @Column(name = "customer_id",length = 50)
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer customerId;
    @Column(name="name",length = 100)
    private String name;
    @Column(name="user_name",length = 25)
    private String userName;
    @Column(name="password",length = 20)
    private String password;
    @Column(name="frist_email",length = 20)
    private String firstEmail;
    @Column(name="secound_email",length = 20)
    private String secoundEmaill;
    @Column(name="addres",length = 25)
    private String addres;
    @Column(name="job_role",length = 10)
    private String jobRole;
    @Column(name="cv")
    private String cv;
    @Column(name="github_link")
    private String githubLink;
    @Column(name = "linkin")
    private String linkin;

}
