'use client'

import React, { useEffect, type FC } from 'react'
import { useForm } from 'react-hook-form'
import { registerSchema, registerSchemaType } from '@/schema/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from './ui/button'
import { Form } from '@/components/ui/form'
import { InputField } from './Fields'
import { z } from 'zod'
import { useState } from 'react'

const f = '⇒ RegistrationForm.tsx (RegistrationForm):'

const RegistrationForm: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [isSent, setIsSent] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>(
    'Default error message'
  )
  const [serverErrors, setServerErrors] = useState<z.ZodIssue[] | undefined>(
    undefined
  )

  const form = useForm<registerSchemaType>({
    // comment resolver: zodResolver... to imitate server validation
    // resolver: zodResolver(registerSchema),
    defaultValues: {
      first: '',
      last: '',
      email: '',
    },
  })
  // console.log(f, 'form.control →', form.control)
  const processForm = async (data: registerSchemaType) => {
    const url = '/api/register'
    setIsLoading(true)
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        setIsLoading(false)
        console.log(f, 'response →', response)
        setErrorMessage(
          response.status + ': ' + response.url + ' ' + response.statusText
        )
        setIsError(true)
        return
      }
      console.log(f, 'response →', response)
      const responseData = await response.json()
      console.log(f, 'data returned from server →', responseData)
      if (responseData.user) {
        setIsError(false)
        setErrorMessage('')
        setServerErrors(undefined)
        setIsSent(true)
      } else {
        setIsError(true)
        setErrorMessage(responseData.message)
        setServerErrors(responseData.error.issues)
      }
    } catch (error) {
      console.error(f, 'error occurred while processing form →', error)
      setIsError(true)
    }
    setIsLoading(false)
  }
  return (
    <>
      {!isSent ? (
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
            {isError && <div className='text-destructive'>{errorMessage}</div>}
            {serverErrors && (
              <div className='text-destructive'>
                {serverErrors.map((error, index) => {
                  return <div key={index}>{error.message}</div>
                })}
              </div>
            )}
            <Button
              type='submit'
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Submit'}
            </Button>
          </form>
        </Form>
      ) : (
        <div className='space-y-4'>
          <div>Thank you</div>
          <Button
            onClick={() => {
              setIsSent(false)
            }}
          >
            Go back
          </Button>
        </div>
      )}
    </>
  )
}
export default RegistrationForm
