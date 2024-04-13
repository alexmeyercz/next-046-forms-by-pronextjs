'use client'

import React, { type FC } from 'react'
import { useForm } from 'react-hook-form'
import { schema, schemaType } from '@/schema/registrationSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from './ui/button'
import { Form } from '@/components/ui/form'
import { InputField } from './Fields'
import { z } from 'zod'

const f = '⇒ RegistrationForm.tsx (RegistrationForm):'

const RegistrationForm: FC = () => {
  const form = useForm<schemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      first: '',
      last: '',
      email: '',
    },
  })
  console.log(f, 'form.control →', form.control)
  const processForm = async (data: schemaType) => {
    console.log(f, 'data →', data)
  }
  return (
    <Form {...form}>
      <form
        className='space-y-8'
        onSubmit={form.handleSubmit(processForm)}
      >
        <h2>Registration Form</h2>
        <div className='flex gap-4 justify-between'>
          <InputField
            control={form.control}
            name='first'
            label='First name'
            description='Your first name'
          />
          <InputField
            control={form.control}
            name='last'
            label='Last name'
            description='Your last name'
          />
        </div>
        <InputField
          control={form.control}
          name='email'
          label='E-mail'
          description='Your e-mail address'
        />

        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  )
}
export default RegistrationForm