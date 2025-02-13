import React from 'react'

function LogosCompo({logo}) {
    return (
        <><div className="logoItems w-12">
            <img src={logo} className='w-full' alt="" />
        </div></>
    )
}

export default LogosCompo