import ContactForm from '@/components/ContactForm'
import React, { type FC } from 'react'

const f = '⇒ page.tsx (ContactPage):'

const ContactPage: FC = () => {
  return (
    <div>
      <ContactForm />
      <div className='mt-8'>
        <p>FormData POST via API Route</p>
      </div>
    </div>
  )
}
export default ContactPage
