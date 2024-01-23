import Image from 'next/image'
import bgpi from '../public/assets/carcrashpi.jpeg'
import injury from '../public/assets/icon-injury.svg'
const Header = () => {

    return (
        <div>
                     
 <div className="relative   ">
       <Image 
           layout="fill"
           className="object-center object-cover pointer-events-none md:min-h-[650px] bg-fixed "
           src={bgpi}
           alt="header pic"
           priority
           quality={80}
           
       />
       <div className="relative z-1 md:min-h-[450px]  sm:min-h-[300px]">
                
 
       </div>
    
  

      </div> 
 



 <div>
     <div className="md:hidden sm:block p-6">
                     <p className="text-logoBlue   sm:text-[28px] text-[32px] font-bold track-leading ">COMPASSIONATE ADVOCATES FOR PERSONAL INJURY VICTIMS</p>
                     <p className="text-black track-leading pt-5 ">At our personal injury law firm, we are dedicated to providing unwavering support and expert legal representation to those who have been injured due to the negligence of others. With a deep commitment to justice and a track record of successful outcomes, our team of compassionate advocates is here to help you secure the compensation you deserve.</p>
     </div>
 </div>

 

   <div className="relative container   sm:hidden md:block h-32 w-32 mx-auto md:min-h-[225px] md:min-w-[1000px] lg:min-w-[1200px] md:mt-[-360px] lg:mt-[-336px]   mb-[160px] ...">
            <div className="absolute inset-x-5 bottom-0 h-16  text-white mx-auto     opacity-100">
                <div className="flex flex-row  border-l-4 border-logoBlue ">
                    <div className="w-4/5 flex flex-col bg-white min-h-[229px] p-[20px]">
                        <p className="text-logoBlue    text-[32px] font-bold track-leading ">COMPASSIONATE ADVOCATES FOR PERSONAL INJURY VICTIMS</p>
                        <p className="text-black track-leading pt-5 ">At our personal injury law firm, we are dedicated to providing unwavering support and expert legal representation to those who have been injured due to the negligence of others. With a deep commitment to justice and a track record of successful outcomes, our team of compassionate advocates is here to help you secure the compensation you deserve.</p>
                        <span className="border-dotted border-b-2 border-logoBlue pt-10 mb-10">

                            
                        </span>
          
                                <button className="w-1/5 flex text-left text-white bg-logoBlue  border-0 py-2 px-9 focus:outline-none hover:bg-gray rounded text-lg">Book</button>
                            
                            
                
                      
                    </div>
                    

                    <div className="w-2/5 p-7 flex flex-col bg-logoBlue min-h-[280px]  ">
                        <div className="flex flex-row inline-block align-top space-x-5">
                           
                                     <Image className="   " width={20} height={10} src={injury} alt=""/>
                          
                        
                              <p className="text-[20px]"> PERSONAL INJURY</p>
                              
                        </div>
                           <span className="border-dotted border-b-2 border-white pt-4  "></span>
                        
                   
                        <ul className="list-disc text-[16px] pt-5 p-3">
                        <li>Car accidents</li>
                        <li>Motorcycle accidents</li>
                        <li>Commercial truck accidents</li>
                        <li>Pedestrian and bicycle accidents</li>
                        <li>Slip-and-falls</li>
                        <li>Other premises liability cases</li>
                        <li>Dangerous and defective products</li>
                        <li>Wrongful death</li>
                        <li>Workers Compensation</li>
                        </ul>
                    


                        <p className="text-[18px]   lg:mb-[-26px] md:mb-[-200px]"> Explore More</p>
                       
                    </div>
                </div>
      
            </div>
       </div>
        </div>
    )
}

export default Header