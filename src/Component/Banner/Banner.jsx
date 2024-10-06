// import React from 'react'
import banner1 from '../../assets/banner1.jpeg'

function Banner() {
  return(
    <div className='w-full h-[25rem] relative'>
       <img
        src={banner1}
        className='w-full h-full'
        alt="banner"
         />
         <div className="absolute top-20 left-0 right-0 mx-auto w-[20rem]">
                <div className="flex flex-col gap-4">

                    <div className="font-semibold text-5xl text-white">
                        Crypto Tracker
                    </div>

                    <div className="font-semibold text-sm text-white text-center">
                        Get all info regarding cryptocurrencies
                    </div>

                </div>
            </div>
    </div>
  )
}

export default Banner