import RegistrationForm from '@/components/RegistrationForm'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

import React, { type FC } from 'react'

const f = '⇒ page.tsx (HomePage):'

const HomePage: FC = () => {
  const links: { href: string; label: string; description: string }[] = [
    {
      href: '/register',
      label: 'Register',
      description: 'JSON POST Request via API route',
    },
    {
      href: '/contact',
      label: 'Contact',
      description: 'FormData POST via API Route',
    },
    {
      href: '/subscribe',
      label: 'Subscribe',
      description: 'Creating a Server Action for Form Data',
    },
    {
      href: '/comment',
      label: 'Comment',
      description: 'Implement a Server Action for Handling Form Data',
    },
  ]
  return (
    <div className='space-y-8 text-center'>
      {links.map((link) => {
        const { href, label, description } = link
        return (
          <div key={href}>
            <Button asChild>
              <Link href={href}>
                <strong className='text-destructive'>{label}</strong>:{' '}
                {description}
              </Link>
            </Button>
          </div>
        )
      })}
    </div>
  )
}
export default HomePage
