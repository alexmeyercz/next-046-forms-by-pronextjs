'use client'
import Link from 'next/link'
import React, { type FC } from 'react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import { cn } from '@/lib/utils'

const f = '⇒ Navbar.tsx (Navbar):'

const links: { title: string; href: string; description: string }[] = [
  {
    title: 'Home',
    href: '/',
    description: 'Home page',
  },
  {
    title: 'Register',
    href: '/register',
    description: 'Registration page',
  },
  {
    title: 'Contact',
    href: '/contact',
    description: 'Contact page',
  },
]

const Navbar: FC = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {links.map((link) => {
          const { title, href } = link
          return (
            <NavigationMenuItem key={href}>
              <Link
                href={href}
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
export default Navbar
