import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const kontakt = () => {
  return (
    <>
    <Navbar />
    <div className='bg-[#064da0] text-white headertext'>
      <div className='p-5 grid grid-cols-1 sm:grid-cols-3'>
        <div className=' flex justify-center items-center text-center'>
          <h2 className='text-3xl'>Treten Sie mit uns in Kontakt!</h2>
        </div>
        <div className='text-center'>
        <h2 className='py-4 text-2xl font-semibold'>Kontakt</h2>
        <p className='py-2  text-xl'>Tel.: 040 / 181 851 04</p>
        <p className='py-2 text-xl'>Fax: 040 / 181 851 06</p>
        <p className='py-2 text-xl'>Mobil: 0176 / 360 823 88</p>
        <p className='py-2 text-xl'>info@bk-bauputz-hh.de</p>
        </div> 
        <div className='text-center'>
        <h2 className='py-4 text-2xl font-semibold'>Unsere Adresse</h2>
            <p className='py-2 text-xl'>BK Innenputz & Fassaden GmbH</p>
            <p className='py-2 text-xl'>Brandstücken 23</p>
            <p className='py-2 text-xl'>22549 Hamburg</p>
        </div> 
      </div>
    </div>
    <div className='w-full flex justify-center headerbackground'>
          <div className="p-[50px] inline-block max-w-max m-auto">
          <form action="https://getform.io/f/86537289-4693-4bb5-b5fa-ef02736c1a18" method="POST">
            <div className='inline-block'>
                <h2 className='text-3xl font-semibold py-3 text-white headertext'>Kontakt Formular</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-2">
              <div className="flex items-center">
                <input
                  className="rounded-lg p-2 w-full placeholder-[#1B1B1B] bg text-xl"
                  name="name"
                  type="text"
                  placeholder='Name*'
                  required
                ></input>
              </div>
              <div className="flex flex-col py-2">
              <input
                className="rounded-lg p-2 placeholder-[#1B1B1B] bg text-xl"
                name="email"
                type="email"
                placeholder='Email*'
                required
              ></input>
            </div>
              <div className="flex items-center">
                <input
                  className=" rounded-lg p-2 w-full placeholder-[#1B1B1B] bg  text-xl"
                  placeholder='Firma'
                  name="firma"
                  type="text"
                ></input>
              </div>
            </div>
            {/* Form block */}
            <div className="flex flex-col py-2">
              <input
                className=" rounded-lg p-2 placeholder-[#1B1B1B] bg text-xl"
                name="subject"
                type="text"
                placeholder='Thema'
              ></input>
            </div>
            <div className="flex flex-col py-2">
              <textarea
                className=" rounded-lg p-2 placeholder-[#1B1B1B] bg text-xl"
                name="message"
                type="text"
                placeholder='Nachricht*'
              ></textarea>
            </div>
            <div className='p-[15px] flex items-center'>
              <span><input type='checkbox' required></input></span>
              <p className='text-lg px-4 text-white headertext'>Ich habe die Datenschutzerklärung zur Kenntnis genommen und erkläre mich damit einverstanden.</p>
            </div>
            <div className="flex text-center items-center justify-around">
                <div className='rounded-lg text-xl'><button type='submit' className="p-4 w-auto rounded-lg shadow-lg bg-[#064da0] text-white hover:bg-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none">Absenden</button></div>
                <div className='rounded-lg text-xl'><button type='reset' className="p-4 w-auto rounded-lg shadow-lg bg-[#064da0] text-white hover:bg-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none">Löschen</button></div> 
            </div>
          </form>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default kontakt