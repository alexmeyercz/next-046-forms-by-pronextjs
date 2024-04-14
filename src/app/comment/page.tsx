import CommentForm from '@/components/CommentForm'
import React, { type FC } from 'react'
import { CommentSchemaType, commentSchema } from '@/schema/schema'
import { z } from 'zod'

const f = '⇒ page.tsx (CommentPage):'

const CommentPage: FC = () => {
  const onDataAction = async (data: CommentSchemaType) => {
    'use server'
    const parsed = commentSchema.safeParse(data)
    console.log(f, 'parsed →', parsed)
    console.log(f, 'data →', data)

    if (parsed.success) {
      // add data to database
      return {
        message: 'Comment added successfully',
        comment: parsed.data,
      }
    } else {
      return {
        message: 'Invalid comment',
        issues: parsed.error.issues.map((issue) => issue.message),
      }
    }
  }
  return (
    <div className='space-y-8'>
      <CommentForm onDataAction={onDataAction} />
      <p>Creating a Server Action for Form Data</p>
    </div>
  )
}
export default CommentPage
