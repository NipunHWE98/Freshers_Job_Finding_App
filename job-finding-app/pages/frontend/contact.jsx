import React, { useEffect, useState } from 'react'

import { FaLinkedin ,FaPhoneAlt,FaFacebookSquare,FaWhatsapp,FaEnvelope} from "react-icons/fa";
import NavBar from '@/components/NavBar'
import logo from '../asserts/images.png';
import Image from 'next/image'

export default function Intro() {

  return (
    <>
    <NavBar />
    <div className='w-full  h-full flex flex-col py-36'>
        <div className='flex flex-row  px-0 h-full flex  space-x-0 '>
                    <div className='w-2/5 pl-20 bg-left' >
                        <Image width={400} height={400} className="flex rounded-full mb-0 md:mb-0" src={logo} alt="no-image-found" />
                    </div>
                    <div className='w-3/5 text-2xl font-extrabold pr-20 h-28'>
                        <p className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500' >
Welcome to our job-finding web app, designed with fresh graduates in mind! Embark on your professional journey with us as we connect you to exciting opportunities tailored to kickstart your career. Our platform is crafted to simplify the job search process, offering a user-friendly experience that empowers you to discover and apply for the perfect positions. Whether you're exploring entry-level roles or seeking opportunities to match your newly acquired skills, our job-finding web app is your go-to destination. Elevate your career prospects, gain valuable insights, and step into the workforce with confidence. Your dream job awaits – let's build your future together!</p>
                    </div>


        </div>
        <div className=' flex flex-row pl-5 ring-blue-500 space-x-10  '>
            <div className='w-1/2'>
                <div className='text-center justify-center text-4xl p-10 italic' >
                    <h1>Scope:</h1>
                </div>
                <div className=' bg-blue-200 ring-blue-500 p-5 font-serif text-center' >
                    <p>Our company is dedicated to creating a comprehensive job-finding web application tailored for fresh graduates. The scope encompasses the development of a user-friendly platform that simplifies the job search process, providing a seamless experience for users to explore and apply for entry-level positions. The application aims to cover a diverse range of industries and job categories, ensuring that fresh graduates from various backgrounds can find opportunities that align with their skills and aspirations.</p>
                </div>
            </div>
            <div className='w-1/2'>
                <div className='text-center justify-center text-4xl p-10 italic'>
                    <h1>Aim:</h1>
                </div>
                <div className='bg-blue-200 ring-blue-500 p-5 font-serif text-center'>
                    <p>The primary aim of our company is to empower fresh graduates by offering them a dedicated platform to discover and secure employment opportunities that match their qualifications and career goals. We strive to bridge the gap between employers and talented entry-level professionals, facilitating a smooth and efficient recruitment process. Our goal is to become a trusted partner for both job seekers and employers, fostering a community where career growth and success are accessible to all.</p>
                </div>
            </div>
        </div>
        <div className='flex flex-row bg-gray-300 m-10 h-20 space-x-10 p-10 text-xl pl-20 '>
            <div className='flex items-center justify-center ' >
                <FaFacebookSquare/>
                <p className='pl-2'>www.facebook.com</p>
            </div>
            <div className='flex items-center justify-center '>
                <FaWhatsapp/>
                <p className='pl-2'>0765261206</p>
            </div>
            <div className='flex items-center justify-center '>
                <FaLinkedin/>
                <p className='pl-2'>https://www.linkedin.com/in/jobfinding</p>
            </div>
            <div className='flex items-center justify-center '><FaEnvelope/>
            <p className='pl-2'>jobfinding@gmail.cm</p></div>
            <div className='flex items-center justify-center '>
                <FaPhoneAlt/>
                <p className='pl-2'>0765261206</p>
            </div>
        </div>
    </div>
    </>
  )
}


