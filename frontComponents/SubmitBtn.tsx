import React from 'react'
import Image from 'next/image'
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const SubmitBtn = () => {

    const { pending } = useFormStatus()

    return (

        <button className="mt-12 sm:text-center xl:mt-5 p-5 text-white bg-logoBlue border-0 py-2 px-8 focus:outline-none hover:bg-gray rounded text-lg mx-auto items-center text-[20px]">
            { pending ? (
                 <button className="  " disabled={pending}>Sending... </button>
            ): (
                <>
                  Submit
                </>
            )

            }
  
        </button>
        
    )
}

export default SubmitBtn