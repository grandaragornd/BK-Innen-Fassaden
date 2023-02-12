import React from 'react'

const ContactForm = () => {
  return (
    <div className='w-full inline-block h-screen'>
      <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 text-center inline-block p-[40px] pb-[100px]'>
        <div>
          <h2 className='py-4 text-2xl font-semibold'>Kontakt</h2>
        <p className='py-2  text-xl'>Tel.: 040 / 181 851 04</p>
        <p className='py-2 text-xl'>Fax: 040 / 181 851 06</p>
        <p className='py-2 text-xl'>Mobil: 0176 / 360 823 88</p>
        <p className='py-2 text-xl'>info@bk-bauputz-hh.de</p>
        </div>
        <div className='flex flex-col w-full inline-block'>
          <h2 className='py-4 text-2xl font-semibold'>Unsere Adresse</h2>
            <p className='py-2 text-xl'>BK Innenputz & Fassaden GmbH</p>
            <p className='py-2 text-xl'>Brandstücken 23</p>
            <p className='py-2 text-xl'>22549 Hamburg</p>
        </div>
      </div>
    </div>
  )
}

export default ContactForm