import React from 'react'
import Social from '../components/Social'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='w-full justify-center items-center py-4 flex flex-row bg-gray-600 px-6'>        
        <div>
            <p className='flex text-sm text-slate-50'>@2024, Made by ❤️</p>
        </div>
    </div>
  )
}

export default Footer