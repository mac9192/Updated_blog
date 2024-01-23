"use client"
import React from 'react'
import Image from 'next/image'
import atl from '../public/assets/img-cityatl.webp'
import stars from '../public/assets/icon-star.svg'
import { ParallaxBanner } from 'react-scroll-parallax';


 

const Testimonials = ({dictionary}:{dictionary:any}) => {
  return (
    <div>
   
   <div className=" ">
          <div className="flex items-center justify-center h-[600px] bg-fixed bg-atlsky bg-cover space-x-10  ">
            <div className="flex sm:flex-col md:flex-r  w-3/4 h-96">
                   <p className="text-6xl tracking-wide text-white  mx-auto text-center md:mt-[70px] sm:mt-[-20px]  ">
                   WHAT OUR CLIENTS SAY
                   </p>

                   <p className="md:text-2xl sm:text-xl tracking-wide text-white  mx-auto text-center md:mt-[70px] sm:mt-[40px] ">
                   “Strong work ethic, very helpful and respectful. They helped us with an accident case. They always answered any question we had. I loved that they spoke Spanish so my mother would understand the process from beginning to end.”
                   </p>
                 
                   <div className=" mx-auto mt-8 gap-x-3 flex-row flex ">
                      <div>
                      <Image className="    " width={20} height={10} src={stars} alt=""/>
                      </div>
                      <div>
                      <Image className="    " width={20} height={10} src={stars} alt=""/>
                      </div>
                      <div>
                      <Image className="    " width={20} height={10} src={stars} alt=""/>
                      </div>    <div>
                      <Image className="    " width={20} height={10} src={stars} alt=""/>
                      </div>
                      <div>
                      <Image className="    " width={20} height={10} src={stars} alt=""/>
                      </div>
                    
                  </div>
               

                 
            </div>
     
         
     
   </div>

   </div>
  
    </div>
  )
}

export default Testimonials

/*


import React from 'react'

const Testimonials = () => {
  return (
    <div>
      Testimonials
    </div>
  )
}

export default Testimonials

*/