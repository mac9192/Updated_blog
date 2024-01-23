import {z} from 'zod'

export const MessageSchema = z.object({
    id: z.string(),
    isUserMessage: z.boolean(),
    text: z.string()
})

// array validator
//(holds previous messages so ChatGpt has context and remembers prevoius messages)

export const MessageArraySchema = z.array(MessageSchema)

export type Message = z.infer<typeof MessageSchema>