'use client'

// react/next
import React, { type FC, useState } from 'react'
import { useFormState } from 'react-dom'
import { useRef } from 'react'
// shadcn
import { useForm } from 'react-hook-form'
import { Form } from '@/components/ui/form'
import { Button } from './ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
// components
import { InputField } from './Fields'
import { SubscribeSchemaType, subscribeSchema } from '@/schema/schema'

const f = '⇒ SubscribeForm.tsx (SubscribeForm):'

export type OnFormActionType = {
  message: string
  subscriber?: SubscribeSchemaType
  issues?: string[]
}

type SubscribeFormProps = {
  onFormAction: (
    prevState: OnFormActionType,
    data: FormData
  ) => Promise<OnFormActionType>
}

const SubscribeForm: FC<SubscribeFormProps> = ({ onFormAction }) => {
  const [state, formAction] = useFormState(onFormAction, {
    message: '',
  })

  const form = useForm<SubscribeSchemaType>({
    // comment resolver: zodResolver... to imitate server validation
    resolver: zodResolver(subscribeSchema),
    defaultValues: {
      first: '',
      last: '',
      email: '',
      zip: '',
    },
  })

  const formRef = useRef<HTMLFormElement>(null)

  return (
    <Form {...form}>
      <form
        className='space-y-8'
        action={formAction}
        onSubmit={form.handleSubmit(() => formRef?.current?.submit())}
        ref={formRef}
      >
        <h2>Subscribe Form</h2>
        {state?.message && <div>{state?.message}</div>}
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
        <div className='flex gap-4 justify-between'>
          <InputField
            control={form.control}
            name='email'
            label='E-mail'
            description='Your e-mail address'
          />
          <InputField
            control={form.control}
            name='zip'
            label='Zip code'
            description='Your valid zip code'
          />
        </div>
        <Button type='submit'>Subscribe</Button>
      </form>
    </Form>
  )
}
export default SubscribeForm
