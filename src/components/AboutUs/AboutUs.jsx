import React from 'react'
import aboutUs from "../../assets/aboutUs.svg"
import people from "../../assets/people.svg"

function AboutUs() {
  return (
    <div className='w-[90%] m-auto flex flex-col mt-60 gap-44'>
      <div className="aboutUs flex flex-col items-center text-center">
        <div className="text">
          <h1 className='poppins-bold text-5xl'>About Us</h1>
          <p className='poppins-medium text-[#7f7f7fff] w-96 my-10'>We offer revolutionary solution to industry problems. Join our community and experience the benefits of company optimization today!</p>
        </div>
        <div className="img w-80 lg:w-96 xl:w-[500px] mt-10">
          <img src={people} className="w-full" alt="" />
        </div>


      </div>
      <div className="ourTeam flex flex-col items-center text-center">
      <div className="text">
          <h1 className='poppins-bold text-5xl my-10'>Team</h1>
          <p className='poppins-medium text-[#7f7f7fff] w-96'>Meet the people behind our magical product</p>
        </div>
        <div className="img w-80 lg:w-96 xl:w-[500px] my-20">
          <img src={aboutUs} className='w-full' alt="" />
        </div>

      </div>
    </div>
  )
}

export default AboutUs;