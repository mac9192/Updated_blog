"use client"
import React from 'react'
import Image from 'next/image'
import passport from '../public/assets/icon-passport.svg'
import crash from '../public/assets/icon-crash.svg'
import court from '../public/assets/img-court.jpg'
import toast from "react-hot-toast"
import {sendEmail} from '../contactForm/sendEmail'
import { experimental_useFormStatus as useFormStatus} from 'react-dom'
import SubmitBtn from './SubmitBtn'


const ContactTop2 = ({dictionary}:{dictionary:any}) => {

  const {pending} = useFormStatus()
  return (
    <div className="flex flex-col w-full lg:flex-row sm:w-full -mt-[64px]  z-3 lg:-mt-[135px] md:-mt-[115px] sm:mt-[0px]">

    <div className="bg-logoBlue w-1/2 sm:w-full p-7 text-white rounded relative">
    <div className="lg:w-4/5 lg:w-1/2 md:pr-16 lg:pr-0 pr-0 px-12 rounded">
  <h2 className="title-font font-medium text-3xl text-gray-900 md:text-[32px] text-white"><span className="border-b-2 border-white">{dictionary.contactTop2.headercontactLeft}</span> {dictionary.contactTop2.headerusTodayLeft}</h2>
      <p className="leading-relaxed mt-2 md:text-[22px]">{dictionary.contactTop2.descriptionLeft}</p>
      <br/>
      <p className="leading-relaxed md:text-[22px]">{dictionary.contactTop2.ctaLeft}</p>
    </div> 
        
    </div>
    <div className="bg-white  w-1/2 sm:w-full -mt-[64px] rounded relative">
       <div className="flex md:flex-Row p-3 w-full md:text-[22px] items-center gap-5 bg-white rounded relative">
           <Image className=" "src = {passport} alt="/" width="50" height="50" priority={true} />
           <p className="w-1/2 text-center  border-r-2  border-b-2 border-gray rounded text-logoBlue">
           {dictionary.contactTop2.immigration}
           </p> 
           <Image className=" "src = {crash} alt="/" width="50" height="50" priority={true} />
           <p className="w-1/2 text-center border-r-2   border-r-2  border-b-2 border-gray rounded text-logoBlue relative">
           {dictionary.contactTop2.personalInjury}
           </p>
       </div>
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
            <div className="flex-col bg-white  min h-48 p-10 "> 
        
        <div className="relative mb-4 flex flex-row gap-2 ">
        <input placeholder="First Name" type="firstName" id="firstName" maxLength={500} required  name="senderFirstName"  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700   px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        <input placeholder="Last Name" type="lastName" id="lastName" maxLength={500} required  name="senderLastName"className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700   px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        <input placeholder="Email"  type="email" id="email" maxLength={500} required  name="senderEmail" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700   px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="flex flex-row w-full gap-3">
            <input placeholder="Phone Number"  type="phoneNumber" id="phoneNumber" maxLength={500} required  name="senderPhoneNumber" className="w-1/3 bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700   px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        <textarea placeholder="Tell Us About Your Case" id="message" maxLength={500} required  name="senderMessage" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700   px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        
      </div>
        <SubmitBtn />

       </div>
       </form>
        
          
    </div>
   
    </div>
  )
}

export default ContactTop2
