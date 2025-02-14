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
        <div className="w-[90%] mx-auto flex flex-col justify-center items-center mt-24 gap-5">
            <div className="text text-center">
                <h2 className="poppins-medium text-gray-600 text-lg sm:text-xl md:text-2xl">
                    <span>Trusted by individuals and teams at the world's</span>
                    <br className="hidden sm:block" />
                    <span>best companies</span>
                </h2>
            </div>

            <div className="logos flex flex-wrap justify-center items-center mt-5 gap-6 sm:gap-10">
                {logos.map((item, index) => (
                    <LogosCompo key={index} logo={item} />
                ))}
            </div>
        </div>

    )
}

export default Companies