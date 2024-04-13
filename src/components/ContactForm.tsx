'use client'
// react/next
import React, { type FC } from 'react'
// shadcn
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form } from '@/components/ui/form'
import { Button } from './ui/button'
// components
import { InputField, TextareaField } from './Fields'
// lib
import { type ContactSchemaType, contactSchema } from '@/schema/schema'

const f = '⇒ ContactForm.tsx (ContactForm):'
const url = '/api/contact'

const ContactForm: FC = () => {
  const form = useForm<ContactSchemaType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      first: '',
    },
  })
  const processForm = async (data: ContactSchemaType) => {
    const formData = new FormData()
    formData.append('first', data.first)
    formData.append('message', data.message)
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(f, 'data returned from server →', data))
  }
  return (
    <Form {...form}>
      <form
        className='space-y-8'
        onSubmit={form.handleSubmit(processForm)}
      >
        <InputField
          control={form.control}
          name='first'
          label='First Name'
          description='Your first name'
        />
        <TextareaField
          control={form.control}
          name='message'
          label='Message'
          description='Type your message here'
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  )
}
export default ContactForm
