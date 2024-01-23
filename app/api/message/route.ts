import {MessageArraySchema} from '../../../chatbot-lib/validators/message'
import { ChatGPTMessage, OpenAIStreamPayload, OpenAIStream } from '../../../chatbot-lib/openai-stream'
import { chatbotPrompt } from '../../../helpers/constants/chatbot-prompt'

export async function POST(req:Request){

    const{messages} = await req.json()

    //validate entries(Schema)
    const parsedMessages = MessageArraySchema.parse(messages)

   // throw new Error('idk')

    //Messages we are sending to ChatGPT
    const outboundMessages: ChatGPTMessage[] = parsedMessages.map((message) =>({
        role: message.isUserMessage? 'user' : 'system',
        content:message.text,
    }))

   outboundMessages.unshift({
       role: 'system',
       content: chatbotPrompt
   })

   const payload: OpenAIStreamPayload = {
       model: 'gpt-3.5-turbo',
       messages: outboundMessages,
       temperature: 0.0,
       top_p: 1,
       frequency_penalty: 0,
       presence_penalty: 0,
       max_tokens:150, //150 words retruned by ChatGPT 
       stream: true,
       n:1
   }

   const stream = await OpenAIStream(payload)

   return new Response(stream)
}