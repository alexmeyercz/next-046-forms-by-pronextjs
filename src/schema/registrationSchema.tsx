import { z } from 'zod'

export const schema = z.object({
  first: z.string().trim().min(1, { message: 'First name is required' }),
  last: z.string().trim().min(1, { message: 'First name is required' }),
  email: z.string().email({ message: 'Invalid email' }),
})

export type schemaType = z.infer<typeof schema>
