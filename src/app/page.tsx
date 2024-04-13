import RegistrationForm from '@/components/RegistrationForm'
import React, { type FC } from 'react'

const f = '⇒ page.tsx (HomePage):'

const HomePage: FC = () => {
  return (
    <div className='max-w-xl mx-auto pt-8'>
      <RegistrationForm />
    </div>
  )
}
export default HomePage
