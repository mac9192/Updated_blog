'use client'
import { Accordion, AccordionItem, AccordionTrigger } from "../chatbot-components/ui/accordion"
import { FC } from "react"
import ChatHeader from '../chatbot-components/ChatHeader'
import ChatInput from '../chatbot-components/ChatInput'
import { AccordionContent } from "@radix-ui/react-accordion"
import ChatMessages from '../chatbot-components/ChatMessages'
import Image from 'next/image'
import robot from '../public/assets/robot.svg'

const Chat: FC = () =>{

    return(
        <div>
          <Accordion type='single' collapsible className="relative bg-black z-40 shadow "> 
                <AccordionItem value='item-1'>
                    <div className="fixed right-8 w-80 bottom-8 bg-white border border-gray-200 rounded-md overflow:hidden">
                        <div className="w-full h-full flex flex-col">
                            <AccordionTrigger className="px-6 border-b border-zinc-300 text-white">
                               <ChatHeader />
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className='flex flex-col h-80 py-3'>
                       
                                        
                                         <ChatMessages  className='px-2 py-3 flex-1'/>
                                    
                          
                                   
                                    <ChatInput className='px-4' />
                                </div>
                            </AccordionContent>
                        </div>
                    </div>
                </AccordionItem>
          </Accordion>
        </div>
    )

}

export default Chat