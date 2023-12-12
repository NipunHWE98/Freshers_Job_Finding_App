import NavBar from '@/components/NavBar'
import React from 'react'
import {  useSelector } from 'react-redux'
import { get_job } from '@/Services/job';

import JobsCard from '@/components/JobsCard'





export default function DisplayJobs() {
    var JobData = get_job || [];
    JobData = [{"_id":"65719993c34c805940c9bb6e","user":{"_id":"65717b9bc34c805940c9bb5f","name":"Chathura Sandeepa","email":"hh@gmail.com","password":"$2a$12$2mzBAVNribkrBNXd8roDbuTnPpg8fJshhP/nL57Nhd/reGauT2kZa","__v":0},"title":"Software Engineering","description":"dfdsf edfsdf","salary":5000,"company":"Evenbees","email":"evenbees@careers.eve.lk","job_category":"SE","job_type":"fulltime","job_experience":"1","job_vacancy":1,"job_deadline":"2023-12-21T00:00:00.000Z","createdAt":"2023-12-07T10:08:19.442Z","updatedAt":"2023-12-07T10:08:19.442Z","__v":0},{"_id":"65746fe86c434bcb15ea2f67","user":{"_id":"65746c24e10fbf1f1072af59","name":"chathura sandeep bandaranayake","email":"chathura13906@outlook.com","password":"$2a$12$enPpEe52QWur7b/8hWIk8enDiQkiFYO4ce9HxSpmKT7GpamRYBiSu","__v":0},"title":"managment","description":"dgwkjadjeklfhnvdflsa;fje","salary":100000,"company":"University of Jaffna","email":"dffa@ac.lk","job_category":"high level","job_type":"fulltime","job_experience":"2 year","job_vacancy":1,"job_deadline":"2023-12-23T00:00:00.000Z","createdAt":"2023-12-09T13:47:21.002Z","updatedAt":"2023-12-09T13:47:21.002Z","__v":0},{"_id":"65746fed6c434bcb15ea2f69","user":{"_id":"65746c24e10fbf1f1072af59","name":"chathura sandeep bandaranayake","email":"chathura13906@outlook.com","password":"$2a$12$enPpEe52QWur7b/8hWIk8enDiQkiFYO4ce9HxSpmKT7GpamRYBiSu","__v":0},"title":"managment","description":"dgwkjadjeklfhnvdflsa;fje","salary":100000,"company":"University of Jaffna","email":"dffa@ac.lk","job_category":"high level","job_type":"fulltime","job_experience":"2 year","job_vacancy":1,"job_deadline":"2023-12-23T00:00:00.000Z","createdAt":"2023-12-09T13:47:25.776Z","updatedAt":"2023-12-09T13:47:25.776Z","__v":0},{"_id":"65746fef6c434bcb15ea2f6f","user":{"_id":"65746c24e10fbf1f1072af59","name":"chathura sandeep bandaranayake","email":"chathura13906@outlook.com","password":"$2a$12$enPpEe52QWur7b/8hWIk8enDiQkiFYO4ce9HxSpmKT7GpamRYBiSu","__v":0},"title":"managment","description":"dgwkjadjeklfhnvdflsa;fje","salary":100000,"company":"University of Jaffna","email":"dffa@ac.lk","job_category":"high level","job_type":"fulltime","job_experience":"2 year","job_vacancy":1,"job_deadline":"2023-12-23T00:00:00.000Z","createdAt":"2023-12-09T13:47:27.997Z","updatedAt":"2023-12-09T13:47:27.997Z","__v":0},{"_id":"65746ff06c434bcb15ea2f71","user":{"_id":"65746c24e10fbf1f1072af59","name":"chathura sandeep bandaranayake","email":"chathura13906@outlook.com","password":"$2a$12$enPpEe52QWur7b/8hWIk8enDiQkiFYO4ce9HxSpmKT7GpamRYBiSu","__v":0},"title":"managment","description":"dgwkjadjeklfhnvdflsa;fje","salary":100000,"company":"University of Jaffna","email":"dffa@ac.lk","job_category":"high level","job_type":"fulltime","job_experience":"2 year","job_vacancy":1,"job_deadline":"2023-12-23T00:00:00.000Z","createdAt":"2023-12-09T13:47:28.164Z","updatedAt":"2023-12-09T13:47:28.164Z","__v":0},{"_id":"65746ff26c434bcb15ea2f73","user":{"_id":"65746c24e10fbf1f1072af59","name":"chathura sandeep bandaranayake","email":"chathura13906@outlook.com","password":"$2a$12$enPpEe52QWur7b/8hWIk8enDiQkiFYO4ce9HxSpmKT7GpamRYBiSu","__v":0},"title":"managment","description":"dgwkjadjeklfhnvdflsa;fje","salary":100000,"company":"University of Jaffna","email":"dffa@ac.lk","job_category":"high level","job_type":"fulltime","job_experience":"2 year","job_vacancy":1,"job_deadline":"2023-12-23T00:00:00.000Z","createdAt":"2023-12-09T13:47:30.195Z","updatedAt":"2023-12-09T13:47:30.195Z","__v":0},{"_id":"65746ff76c434bcb15ea2f75","user":{"_id":"65746c24e10fbf1f1072af59","name":"chathura sandeep bandaranayake","email":"chathura13906@outlook.com","password":"$2a$12$enPpEe52QWur7b/8hWIk8enDiQkiFYO4ce9HxSpmKT7GpamRYBiSu","__v":0},"title":"managment","description":"dgwkjadjeklfhnvdflsa;fje","salary":100000,"company":"University of Jaffna","email":"dffa@ac.lk","job_category":"high level","job_type":"fulltime","job_experience":"2 year","job_vacancy":1,"job_deadline":"2023-12-23T00:00:00.000Z","createdAt":"2023-12-09T13:47:35.640Z","updatedAt":"2023-12-09T13:47:35.640Z","__v":0},{"_id":"65746ffc6c434bcb15ea2f77","user":{"_id":"65746c24e10fbf1f1072af59","name":"chathura sandeep bandaranayake","email":"chathura13906@outlook.com","password":"$2a$12$enPpEe52QWur7b/8hWIk8enDiQkiFYO4ce9HxSpmKT7GpamRYBiSu","__v":0},"title":"managment","description":"dgwkjadjeklfhnvdflsa;fje","salary":100000,"company":"University of Jaffna","email":"dffa@ac.lk","job_category":"high level","job_type":"fulltime","job_experience":"2 year","job_vacancy":1,"job_deadline":"2023-12-23T00:00:00.000Z","createdAt":"2023-12-09T13:47:40.161Z","updatedAt":"2023-12-09T13:47:40.161Z","__v":0}]
    console.log('Redux State - JobData:', JobData);
    return (

        <>

            <NavBar />
            <div className='w-full  py-20 flex items-center md:px-8 px-2  justify-center flex-col'>
                <h1 className='px-4 mx-2 py-2 uppercase tracking-wider border-b-2 border-b-indigo-600 text-3xl font-semibold'>Available Jobs</h1>
                <div className='w-full h-full py-4 flex  overflow-y-auto  items-center justify-center flex-wrap'>
                    {/* map */}
                    {
                        Array.isArray(JobData) && JobData.length > 0 ? JobData?.map((job) => {
                            return (
                                <JobsCard job={job} key={job?._id} />
                            )
                        }) : <p>No jobs found</p>
                    }

                    {/* map */}
                </div>
            </div>
        </>

    )
}
