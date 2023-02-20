import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'

const teams = () => {
  return (
    <>
    <Navbar />
    <div className='inline-block flex flex-col justify-center'>
    <div className='p-5 py-5 w-full'>
        <h2 className='text-4xl font-semibold text-center'>Team</h2>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 px-[30px]'>
        <div className='p-4'>
            <div>
                <Image 
                src='https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                height='500'
                width='500'
                size='cover'
                className='rounded-xl'
                />
            </div>
            <div className='py-4 text-center'>
                <h2 className='text-3xl font-semibold py-3'>Hüseyin Kapici</h2>
                <p className='text-2xl font-semibold py-3'>Geschäftsführer</p>
                <p className='py-3 text-xl'>
                    30-jährige Tätigkeit im
                    <br />
                    Baugewerbe als Putzer
                    <br />
                    Fachgebiete: Putz / Sanierung / Kalkulation
                </p>
            </div>
        </div>
        <div className='p-4'>
            <div>
                <Image 
                src='https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
                height='500'
                width='500'
                size='cover'
                className='rounded-xl'
                />
            </div>
            <div className='py-4 text-center'>
                <h2 className='text-3xl font-semibold py-3'>Baris Kapici</h2>
                <p className='text-2xl font-semibold py-3'>Ansprechpartner</p>
                <p className='py-3 text-xl'>
                    5-jährige Tätigkeit im
                    <br />
                    Baugewerbe als Bürofachkraft/Ansprechpartner
                    <br />
                    Fachgebiete: Putz / Sanierung / Kalkulation
                </p>
            </div>
        </div>   
    </div>

    </div>
    </>
  )
}

export default teams