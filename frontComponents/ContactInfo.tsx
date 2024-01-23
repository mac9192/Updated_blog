"use client"
import React from 'react'
import Image from 'next/image'
import map from '../public/assets/img-map.png'
import toast from "react-hot-toast"
import {sendEmail} from '../contactForm/sendEmail'
import { experimental_useFormStatus as useFormStatus} from 'react-dom'
import SubmitBtn from './SubmitBtn'
import GoogleMap from '../googleMaps/GoogleMap'

const ContactInfo = ({dictionary}:{dictionary:any}) => {

  const {pending} = useFormStatus()
  return (
    <div>
      <div className="  py-10 mx-auto md:px-6  ">
      <div className="md:p-12 md:mt-  text-[36px] mb-10  mx-auto text-center max-w-screen-2xl text-logoBlue  ">
          {dictionary.contacts.header}
                  </div>
 
  <section className="mb-33 rounded-lg">
    
    <div className="relative h-[300px] overflow-hidden rounded-lg  bg-[50%] bg-no-repeat bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')]"></div>
    <div className=" md:container md:mx-auto items-center mx-auto px-6 md:px-12">
      <div
        className="block rounded-lg bg-[hsla(0,0%,100%,0.6)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]   dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
        <div className="flex flex-wrap">
        <div className="flex md:flex-row mx-auto text-center sm:flex-col mx-auto w-full">
                    <div className="mx-auto text-center  p-3 mx-auto ">
                    <p className="text-logoBlue text-2xl">Office Number</p>
                    <p className="text-xl pt-1" >(855) 274-2366</p>
                    </div>
                    <div className="mx-auto text-center  p-3 ">
                    <p className="text-logoBlue text-2xl">Email Address</p>
                    <p className="text-xl pt-1">info@ChevesBriceno.com</p>
                    </div>
                    <div className="mx-auto text-center  p-3 ">
                      <p className="text-logoBlue text-2xl">Atlanta Location</p>
                      <p className="text-xl pt-1">3295 River Exchange Dr. Suite 420</p>
                    </div>
                </div>
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 mt-5 lg:mb-0 lg:w-5/12 lg:px-6">
          <form 
          className=" "
          action={async (formData) => {
            const {data,error} =  await sendEmail(formData)

            if (error){
                toast.error(error)
                return;
            }
            toast.success('Email sent successfully')
          }} 
    >
              <div className="relative mb-6" data-te-input-wrapper-init>
              <input  placeholder="First Name" type="firstName" id="firstName" maxLength={500} required  name="senderFirstName" className="text-[18px] p-2 w-full bg-white rounded border border-gray-300 focus:border-logoBlue focus:ring-2 focus:ring-logoBlue text-base outline-none text-black   px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
              <input placeholder="Last Name" type="lastName" id="lastName" maxLength={500} required  name="senderLastName" className="w-full bg-white  p-2 rounded border border-gray-300 focus:border-logoBlue focus:ring-2 focus:ring-logoBlue text-base outline-none text-black   px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
              <input placeholder="Phone Number"  type="phoneNumber" id="phoneNumber" maxLength={500} required  name="senderPhoneNumber"className="w-full bg-white  p-2 rounded border border-gray-300 focus:border-logoBlue focus:ring-2 focus:ring-logoBlue text-base outline-none text-black  px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
              <input placeholder="Email"  type="email" id="email" maxLength={500} required  name="senderEmail" className="w-full bg-white rounded border  p-2 border-gray-300 focus:border-logoBlue focus:ring-2 focus:ring-logoBlue text-base outline-none text-black   px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
              <textarea placeholder="Tell Us About Your Case"   id="message" maxLength={500} required  name="senderMessage" className="w-full bg-white rounded border  p-2 border-gray-300 focus:border-logoBlue focus:ring-2 focus:ring-logoBlue text-base outline-none text-black   px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                
              </div>
              <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
             
               
              </div>
              
              <SubmitBtn />
            </form>

          </div>
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div className="flex flex-wrap mx-auto text-center  ">
           
      
          
              <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12   mx-auto items-center  ">
              
              <div className="w-full">
                <GoogleMap />
              </div>
         
   
              
              </div>
           
            <div>
              
            </div>
          

            </div>


            <div>
         
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
</div>
 
    </div>
  )
}

export default  ContactInfo
 

/*
   <section class="text-gray-600 body-font relative bg-blueLogo">
  
  <div class="container  px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      
    <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10  flex items-end justify-start relative">
    <Image className="items-center w-full h-full rounded absolute"src = {map} alt="/" width="700" height="50" priority={true} />
       
      <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md-10 z-10">
        <div class="lg:w-1/2 px-6 z-10">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p class="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a class="text-indigo-500 leading-relaxed">example@email.com</a>
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p class="leading-relaxed">123-456-7890</p>
        </div>
      </div>
    </div>
    <section class="bg-white dark:bg-gray-900 rounded">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md rounded">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900  ">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>
  </div>
</section>



*/