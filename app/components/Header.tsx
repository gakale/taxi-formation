import React from 'react'
import Image from 'next/image'
import Logo from '../../public/logo-taxi.png'
import { SignInButton, UserButton , SignOutButton } from "@clerk/nextjs";

export default function Header() {
  return (
      <header className="flex items-center justify-between py-3 px-6">
          <div className='flex items-center gap-3'>

              <Image className='cursor-pointer' src={Logo} alt="logo" width={50}  />
        <ul className='hidden md:flex items-center gap-4'>
            <li className='text-yellow-500 font-bold  cursor-pointer'>
              Home
            </li>
            <li className='text-[#333] cursor-pointer hover:text-yellow-500'>
              Course
            </li>
            <li className='text-[#333] cursor-pointer hover:text-yellow-500'>
              Aides
            </li>
          </ul>
          </div>
          <div className='flex items-center gap-3'>
            
            <SignInButton />
            <UserButton />
          </div>
      </header>
  )
}
