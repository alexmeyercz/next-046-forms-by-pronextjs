'use client'
import React, { type FC } from 'react'
import { Form } from './ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { InputField, TextareaField } from './Fields'
import { type CommentSchemaType, commentSchema } from '@/schema/schema'
import { Button } from './ui/button'

const f = '⇒ CommentForm.tsx (CommentForm):'

type CommentFormProps = {
  onDataAction: (data: CommentSchemaType) => Promise<{
    // this must match the return type of onDataAction (page.tsx)
    message: string
    comment?: CommentSchemaType
    issues?: string[]
  }>
}
const CommentForm: FC<CommentFormProps> = ({ onDataAction }) => {
  const form = useForm<CommentSchemaType>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      name: '',
      comment: '',
    },
  })

  const processForm = async (data: CommentSchemaType) => {
    console.log(f, 'data →', data)
    console.log(f, 'Data received from server →', await onDataAction(data))
    onDataAction(data)
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(processForm)}
          className='space-y-8'
        >
          <h2>Add comment</h2>
          <InputField
            control={form.control}
            name='name'
            label='Name'
            description='Your full name'
          />
          <TextareaField
            control={form.control}
            name='comment'
            label='Comment'
            description='Type your comment here'
          />
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    </>
  )
}
export default CommentForm
