import Image from 'next/image'
import React from 'react'
import PlaceholderAvatar from '../assets/images/placeholder_avatar.png'

export const Header = () => {
  return (
    <div className='flex w-full items-center justify-between'>
        <h3 className='text-lg'>Welcome back,</h3>
        <Image className='w-12' src={PlaceholderAvatar} alt='Default avatar' />
    </div>
  )
}
