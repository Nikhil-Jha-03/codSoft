import React from 'react'
import projectimg from "../../assets/projectimg.svg"
import Companies from '../Companies/companies'

function Home() {
  return (
    <>
    <div className='w-[80%] m-auto p-5 pt-10 flex justify-around items-center mt-48'>
      <div className="leftSide flex flex-col gap-8">
        <div className="fortext flex flex-col gap-8">
          <h4 className='text-[#7f7f7fff] poppins-medium'>- Free 30 Days Trail</h4>
          <h1 className='poppins-bold flex flex-col text-6xl gap-2'>

            <span>The best way to </span>
            <span>show case your</span>
            <span>project.</span>

          </h1>


          <h3 className="text-gray-600 poppins-medium  text-2xl">
            A clean and professional platform to highlight your work, share your skills, and impress your audience.
          </h3>
        </div>


        <div className="forBtn flex gap-5">
          <button className="poppins-medium px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-400">
            Try For Free
          </button>
          <button className="poppins-medium px-4 py-2 rounded-lg bg-gray-200 text-gray-900 font-semibold hover:bg-gray-300 focus:ring-2 focus:ring-gray-400">
            See How It Works
          </button>
        </div>
      </div>
      <div className="rightSide w-4xl">
        <img src={projectimg} className='w-full' alt="" />
      </div>

    </div>
      <Companies/>
      </>
  )
}

export default Home 