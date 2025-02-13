import React from 'react'
import LogosCompo from './LogosCompo'
import logo1 from "../../assets/CompaniesLogo/logo1.svg"
import logo2 from "../../assets/CompaniesLogo/logo2.svg"
import logo3 from "../../assets/CompaniesLogo/logo3.svg"
import logo4 from "../../assets/CompaniesLogo/logo4.svg"
import logo5 from "../../assets/CompaniesLogo/logo5.svg"
import logo6 from "../../assets/CompaniesLogo/logo6.svg"

function Companies() {
    const logos = [
        logo1,
        logo2,
        logo3,
        logo4,
        logo5,
        logo6
    ]
    return (
        <div className='w-[90%] m-auto flex flex-col justify-center items-center mt-24 gap-5'>
            <div className="text">
                <h2 className='poppins-medium text-[#7f7f7fff] flex flex-col text-center text-[18px]'>
                    <span>Trusted by individuals and teams at the world's</span>
                    <span>best companies</span>
                </h2>
            </div>
            <div className="logos flex mt-5 gap-10">
                {logos.map((item, index) => (
                    <LogosCompo key={index} logo={item} />
                ))}

            </div>
        </div>
    )
}

export default Companies