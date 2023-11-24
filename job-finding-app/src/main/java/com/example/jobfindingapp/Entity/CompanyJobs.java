package com.example.jobfindingapp.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class CompanyJobs {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "job_id",length = 20)
    private Integer jobId;
    @Column(name = "job_name",length = 20)
    private String jobName;
    @Column(name = "job_location",length = 20)
    private String jobLocation;
    @Column(name = "job_sallery",length = 20)
    private String jobSallery;
    @Column(name = "job_details",length = 20)
    private String jobDetails;

}
