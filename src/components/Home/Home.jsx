import React from 'react'
import projectimg from "../../assets/projectimg.svg"
import Companies from '../Companies/companies'

function Home() {
  return (
    <>
      <div className="w-[90%] sm:w-[80%] mx-auto p-5 pt-10 flex flex-col xl:flex-row justify-between items-center mt-20   xl:mt-48 gap-10 md:gap-20">

        <div className="leftSide flex flex-col gap-8 text-center md:text-left">

          <div className="fortext flex flex-col gap-8">
            <h4 className="text-[#7f7f7fff] poppins-medium text-lg md:text-xl">- Free 30 Days Trial</h4>
            <h1 className="poppins-bold text-4xl md:text-6xl gap-2">
              <span>The best way to </span>
              <span>show case your </span>
              <span>project.</span>
            </h1>

            <h3 className="text-gray-600 poppins-medium text-lg md:text-2xl">
              A clean and professional platform to highlight your work, share your skills, and impress your audience.
            </h3>
          </div>

          <div className="forBtn flex flex-col md:flex-row gap-5 justify-center md:justify-start">
            <button className="poppins-medium px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-400">
              Try For Free
            </button>
            <button className="poppins-medium px-6 py-3 rounded-lg bg-gray-200 text-gray-900 font-semibold hover:bg-gray-300 focus:ring-2 focus:ring-gray-400">
              See How It Works
            </button>
          </div>
        </div>


        <div className="rightSide w-full md:w-4xl mt-10 md:mt-0">
          <img src={projectimg} className="w-full object-cover" alt="Project Image" />
        </div>
      </div>
      <Companies />

    </>
  )
}

export default Home 