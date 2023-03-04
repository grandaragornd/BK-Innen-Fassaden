import ContactForm from '@/components/ContactForm'
import Navbar from '@/components/Navbar'
import React from 'react'
import Link from 'next/link'

const karriere = () => {
  return (
    <>
        <Navbar />
        <div className='w-full p-[50px] inline-block max-w-max m-auto'>
            <div className='p-5 justify-center'>
                <h2 className='text-4xl font-semibold'>Karriere</h2>
            </div>
            <div className='p-5'>
                <h2 className='text-3xl'> Unsere stellenangebote</h2>
                <p className='text-xl py-3'>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 items-center'>
                <Link href='/trockenbau' className='cursor-pointer'>
                <div className='cursor-pointer text-center rounded-lg bg-[#064da0] h-[200px] text-white hover:bg-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'>
                    <div className='font-semibold sm:text-4xl text-3xl py-[50px]'>
                        <p>TROCKENBAU</p>
                        <p>(M/W/D)</p>
                    </div>
                </div>
                </Link>
                <Link href='/kaufman' className='cursor-pointer'>
                <div className='text-center rounded-lg bg-[#064da0] h-[200px] text-white hover:bg-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'>
                    <div className='cursor-pointer font-semibold sm:text-4xl text-3xl py-[50px]'>
                        <p>KAUFMÄNNISCHER</p>
                        <p>(M/W/D)</p>
                    </div>
                </div>
                </Link>
            </div>
                <ContactForm />
        </div>
    </>
  )
}

export default karriere