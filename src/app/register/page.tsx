import RegistrationForm from '@/components/RegistrationForm'
import React, { type FC } from 'react'

const f = '⇒ page.tsx (RegisterPage):'

const RegisterPage: FC = () => {
  return (
    <div>
      <RegistrationForm />
      <div className='mt-8'>
        <p>JSON POST Request via API route</p>
      </div>
    </div>
  )
}
export default RegisterPage
