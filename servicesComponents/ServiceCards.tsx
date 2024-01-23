import Image from 'next/image'
import carAccident from  '../public/assets/card-car-accident.jpeg'


const ServiceCards = () => {

    return (
        <div>
         <div className="mt-[400px] sm:mt-[50px]   md:mx-auto md:pl-[100px] md:pr-[100px]">
      <p className="md:mt-[400px]  text-4xl tracking-wide w-full border-b-4 border-dotted border-logoBlue text-logoBlue p-3">Personal Injury Services:</p>
</div>
 
<div className='grid   md:mx-auto md:grid-cols-3 sm:grid-cols-1 gap-x-2 gap-y-3 grid-flow-row-dense pt-10   md:pl-[100px] md:pr-[100px]  '>
   
      <div className='bg-logoBlue sm:hidden md:block pt-5 shadow-xl min-h-[350px] row-span-1 md:col-span-2' > 
      <div className=" flex md:flex-row w-full  sm:flex-col sm:pl-10 ">
            <div className="flex flex-row md:w-7/8 sm:w-full sm:pr-8">
            <Image className="sm:max-h-[300px] md:max-h-[305px]  pt-8 pr-3 sm:pl-1" width={480} height={200} src={carAccident} alt=""/>
            </div>
            <div className="flex flex-col  w-full   pr-[100px]"> 
                <p className="md:text-[28px] sm:text-2xl text-white  pt-7 p-2 border-dotted border-b-4 border-white w-full">MOTOR VEHICLE ACCIDENTS</p>
            
                <p className="pt-5 text-2xl text-white">FROM BASIC RESEARCH TO PRACTICAL APPLICATIONS</p>
                <p className="w-full text-1xl pt-6 text-white">We provide our clients with compassionate, yet aggressive representatio  vehicle accidents.</p>
                <p className="w-full text-1xl  text-white pt-5 sm:mb-5">Learn More </p>
            </div>
        </div>
        
      </div>

      <div className='md:hidden bg-carAccident bg-cover shadow-xl min-h-[350px]' >
         <div className="relative h-96   ...">
            <div className="absolute inset-x-0 bottom-0 h-20 bg-logoBlue opacity-90 w-full">
                <div className="mx-auto text-center">
                    <p className="text-white text-2xl pt-5">MOTOR VEHICLE ACCIDENTS</p>
                </div>
            </div>
        </div>
      </div>
   

      <div className='bg-truck bg-cover shadow-xl min-h-[350px]' >
         <div className="relative h-96   ...">
            <div className="absolute inset-x-0 bottom-0 h-20 bg-logoBlue opacity-90 w-full">
                <div className="mx-auto text-center">
                    <p className="text-white text-2xl pt-5">TRUCK ACCIDENTS</p>
                </div>
            </div>
        </div>
      </div>
 
 
   
    </div>
     
<div className='grid md:grid-cols-3   md:mx-auto sm:grid-cols-1 gap-x-2 gap-y-3 grid-flow-row-dense  mt-[19px] md:pl-[100px] md:pr-[100px] '>
       
<div className='bg-slip bg-cover shadow-xl min-h-[350px]' >
         <div className="relative h-96   ...">
            <div className="absolute inset-x-0 bottom-0 h-20 bg-logoBlue opacity-90 w-full">
                <div className="mx-auto text-center">
                    <p className="text-white text-2xl pt-5">SLIP AND FALLS</p>
                </div>
            </div>
        </div>
      </div>
      <div className='bg-death bg-cover shadow-xl min-h-[350px]' >
         <div className="relative h-96   ...">
            <div className="absolute inset-x-0 bottom-0 h-20 bg-logoBlue opacity-90 w-full">
                <div className="mx-auto text-center">
                    <p className="text-white text-2xl pt-5">WRONGFUL DEATH</p>
                </div>
            </div>
        </div>
      </div>
      <div className='bg-worker bg-cover shadow-xl min-h-[350px]' >
         <div className="relative h-96   ...">
            <div className="absolute inset-x-0 bottom-0 h-20 bg-logoBlue opacity-90 w-full">
                <div className="mx-auto text-center">
                    <p className="text-white text-2xl pt-5">WORKERS COMPENSATION</p>
                </div>
            </div>
        </div>
      </div>
 
 
   
    </div>
        </div>
    )
}

export default ServiceCards