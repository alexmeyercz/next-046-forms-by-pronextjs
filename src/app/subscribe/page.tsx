import React, { type FC } from 'react'
import SubscribeForm, { OnFormActionType } from '@/components/SubscribeForm'
import { type SubscribeSchemaType, subscribeSchema } from '@/schema/schema'

const f = '⇒ page.tsx (SubscribePage):'

const SubscribePage: FC = () => {
  const onFormAction = async (
    prevState: OnFormActionType,
    formData: FormData
  ) => {
    'use server'
    const data = Object.fromEntries(formData)
    const parsed = await subscribeSchema.safeParseAsync(data)
    console.log(f, 'parsed →', parsed)
    if (parsed.success) {
      return {
        message: 'User subscribed!',
        subscriber: parsed.data,
      }
    } else {
      return {
        message: 'Invalid data!',
        issues: parsed.error.issues.map((issue) => {
          return issue.message
        }),
      }
    }
  }

  return (
    <div className='space-y-8'>
      <SubscribeForm onFormAction={onFormAction} />
      <div>Implement a Server Action for Handling Form Data</div>
    </div>
  )
}
export default SubscribePage
