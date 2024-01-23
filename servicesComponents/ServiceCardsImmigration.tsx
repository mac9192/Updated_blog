import Image from 'next/image'
import carAccident from  '../public/assets/card-car-accident.jpeg'


const ServiceCards = () => {

    return (
        <div>
         <div className="mt-[400px] sm:mt-[50px]   md:mx-auto md:pl-[100px] md:pr-[100px]">
      <p className="md:mt-[400px]  text-4xl tracking-wide w-full border-b-4 border-dotted border-logoBlue text-logoBlue p-3">Immigration Services:</p>
</div>
 
     
<div className='grid md:grid-cols-3  md:mx-auto sm:grid-cols-1 gap-x-2 gap-y-3 grid-flow-row-dense  p-10 mt-[19px] md:pl-[100px] md:pr-[100px] '>
       
<div className='bg-slip bg-cover shadow-xl min-h-[350px]' >
         <div className="relative h-96   ...">
            <div className="absolute inset-x-0 bottom-0 h-20 bg-logoBlue opacity-90 w-full">
                <div className="mx-auto text-center">
                    <p className="text-white text-2xl pt-5">FAMILY-BASED IMMIGRATION</p>
                </div>
            </div>
        </div>
      </div>
      <div className='bg-death bg-cover shadow-xl min-h-[350px]' >
         <div className="relative h-96   ...">
            <div className="absolute inset-x-0 bottom-0 h-20 bg-logoBlue opacity-90 w-full">
                <div className="mx-auto text-center">
                    <p className="text-white text-2xl pt-5">REMOVAL DEFENSE</p>
                </div>
            </div>
        </div>
      </div>
      <div className='bg-worker bg-cover shadow-xl min-h-[350px]' >
         <div className="relative h-96   ...">
            <div className="absolute inset-x-0 bottom-0 h-20 bg-logoBlue opacity-90 w-full">
                <div className="mx-auto text-center">
                    <p className="text-white text-2xl pt-5">BUSINESS IMMIGRATION</p>
                </div>
            </div>
        </div>
      </div>
 
 
   
    </div>
        </div>
    )
}

export default ServiceCards