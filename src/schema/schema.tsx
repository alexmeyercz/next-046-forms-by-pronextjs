import { z } from 'zod'

// registration
export const registerSchema = z.object({
  first: z.string().trim().min(1, { message: 'First name is required' }),
  last: z.string().trim().min(1, { message: 'First name is required' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Invalid email' })
    .min(1, { message: 'Email is required' }),
})
export type RegisterSchemaType = z.infer<typeof registerSchema>

// contact
export const contactSchema = z.object({
  first: z.string().trim().min(1, { message: 'First name is required' }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Message must be at least 10 characters.' })
    .max(160, {
      message: 'Message must not be longer than 160 characters.',
    }),
})
export type ContactSchemaType = z.infer<typeof contactSchema>

// comment
export const commentSchema = z.object({
  name: z.string().trim().min(1, { message: 'Name is required' }),
  comment: z
    .string()
    .trim()
    .min(10, { message: 'Message must be at least 10 characters.' })
    .max(160, {
      message: 'Message must not be longer than 160 characters.',
    }),
})
export type CommentSchemaType = z.infer<typeof commentSchema>
