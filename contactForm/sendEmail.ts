"use server"
import React from 'react'
import { Resend } from 'resend'
import {  validateString, getErrorMessage } from '../contactForm/utils'
import ContactFormEmail from '../contactForm/email/contact-form-email'

const resend = new Resend(process.env.RESEND_API_KEY)
 
 

export const sendEmail = async (formData: FormData) => {

    const senderName = formData.get('senderFirstName')
    const senderLast = formData.get('senderLastName')
    const senderPhoneNumber = formData.get('senderPhoneNumber')
    const senderEmail = formData.get('senderEmail')
    const senderMessage = formData.get('senderMessage')


    //Simple Server-Side Validation
    if(!validateString(senderName, 500)){
        return {
            error: "Invalid Sender Name"
        }
    }
    if(!validateString(senderEmail, 500)){
        return {
            error: "Invalid Sender Email"
        }
    }
    if(!validateString(senderLast, 500)){
        return {
            error: "Invalid Sender Subject"
        }
    }
    if(!validateString(senderPhoneNumber, 500)){
        return {
            error: "Invalid Sender Subject"
        }
    }
    if(!validateString(senderMessage, 5000)){
        return {
            error: "Invalid Sender Message"
        }
    }

 
    console.log("Running on a server")
    console.log(formData.get("senderName"));
    console.log(formData.get("senderEmail"))
    console.log(formData.get("senderSubject"))
    console.log(formData.get("senderMessage"))

    let data;
    
    try {
    data=await resend.emails.send({
        from:"Law Firm Email <onboarding@resend.dev>",
        to:"miguelcolmenares96@gmail.com",
        subject:"Message from contact form",
        reply_to: senderEmail as string,
        react: React.createElement(ContactFormEmail, {
            senderName: senderName as string,
            senderLast: senderLast as string,
            senderEmail: senderEmail as string,
            senderPhoneNumber: senderPhoneNumber as string,
            senderMessage: senderMessage as string
        })
        // text: senderMessage as string
    })
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
 
}
 return {
     data,
 }
}