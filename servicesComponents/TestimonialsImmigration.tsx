import Image from 'next/image'
import laweyer3 from '../public/assets/lawyer3.jpg' 
import lawfam from '../public/assets/lawfam.png'

const Testimonials = () => {
    return (

        <div>

<div className="md:bg-white sm:bg-logoBlue md:p-0 md:mt-[338px] lg:mt-[25px] sm:mt-[0px] text-center   md:mx-auto sm:text-white md:text-black sm:p-3  md:mb-[-40px] pt-[200px]  ">
    <div className="flex sm:flex-col md:flex-row   md:mx-auto    text-center mx-auto pt-16  mb-16">
            
            <div className="md:w-/4 sm:text-center sm:mx-auto sm:w-full md:text-[22px] md:max-w-[800px] md:text-right">
                <Image className="  md:w-1/10  " width={5200} height={10} src={lawfam} alt=""/>
            </div>
            <div className="md:w-2/4 sm:text-center sm:mx-auto sm:w-full md:text-[25px] md:max-w-[450px] md:text-left">
            <p className="pt-3 sm:text-white md:text-black  border-l-4 border-logoBlue p-6">My son was in a very serious car accident and Gerardo immediately helped him - step by step - take care of working with the lender getting the totaled car paid off and then working with the other insurance company to make sure my son was taken care of as was appropriate.</p> 
            <p className="justify-end pt-3 text-[16px] border-logoBlue p-8">- Kelly A.</p>
            </div>
            
            <div className="md:w-1/4 sm:text-center sm:mx-auto sm:w-full md:text-[20px] md:max-w-[450px] md:text-left sm:hidden  ">
            <p className="pt-3 sm:text-white md:text-black  border-l-4 border-logoBlue p-6">My son was in a very serious car accident and Gerardo immediately helped him - step by step - take care of working with the lender getting the totaled car paid off and then working with the other insurance company to make sure my son was taken care of as was appropriate.</p> 
            <p className="justify-end pt-3 text-[16px] border-logoBlue p-8">- Kelly A.</p>
            </div>

    </div>
  </div>
    
  <div className="sm:hidden md:block">
          <div className="flex items-center justify-center h-96 bg-fixed bg-piSmall bg-cover space-x-10  ">
            <div className="flex sm:flex-col md:flex-r w-1/2">
                   <p className="text-4xl tracking-wide text-white w-3/4  ">
                   Strong And Effective Atlanta Personal Injury Representation from a Georgia Personal Injury Lawyer
                   </p>
                   <p className="text-[18px] text-white pt-4 ">
                     At the personal injury firm of Cheves Briceno, we provide aggressive legal advocacy for people in Georgia, Alabama and Florida who have suffered injuries due to someone else’s negligence. We will not hesitate to take on powerful insurance companies and other corporate interests if it means helping you recoup compensation for your damages.
                   </p>
                   <div className="pt-3">
                         <button className="w-1/6 flex text-left text-logoBlue bg-white  border-0 py-2 px-9 focus:outline-none hover:bg-gray rounded text-2xl">Book</button>
                   </div>

                 
            </div>
     
            <div className="md:w-1/4 sm:text-center sm:mx-auto sm:w-full md:text-[22px] md:max-w-[450px] md:text-right">
                <Image className="    " width={2200} height={10} src={laweyer3} alt=""/>
            </div>
     
   </div>

   </div>
        </div>
    )
}

export default Testimonials