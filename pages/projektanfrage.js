import Navbar from '@/components/Navbar'
import React from 'react'

const projektanfrage = () => {
  return (
    <>
    <Navbar />
    <div className='w-full flex justify-center bg-[#064da0] inline-block'>
          <div className="p-[50px] inline-block max-w-max m-auto">
          <form action="https://getform.io/f/86537289-4693-4bb5-b5fa-ef02736c1a18" method="POST">
            <div className='inline-block'>
                <h2 className='text-3xl font-semibold py-3 text-white'>Projeck Anfrage Formular</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
                <div>
                  <div className='py-2'>
                    <input className="rounded-lg p-2 w-full placeholder-[gray] bg text-xl" type='text' name='firma' id='firma' placeholder='Firma'></input>
                  </div>  
                  <div className='py-2'>
                    <input className="rounded-lg p-2 w-full placeholder-[gray] bg text-xl" type='number' name='telefon' id='telefon' placeholder='Telefon'></input>
                  </div>
                  <div className='py-2'>
                    <input className="rounded-lg p-2 w-2/3 placeholder-[gray] bg text-xl" type='text' name='strasse' id='strasse' placeholder='Strasse'></input>
                    <input className="rounded-lg p-2 w-1/3 placeholder-[gray] bg text-xl" type='text' name='hausnummer' id='hausnummer' placeholder='Haus'></input>
                  </div>
                  <div className='py-2'>
                    <input className='rounded-lg p-2 w-full placeholder-[gray] bg text-xl' type='text' name='ort' id='ort' placeholder='Ort'></input>
                  </div>
                </div>
                <div>
                  <div className='py-2'>
                    <input className='rounded-lg p-2 w-full placeholder-[gray] bg text-xl' type='text' name='name' id='name' placeholder='Name'></input>
                  </div>
                  <div className='py-2'>
                    <input className='rounded-lg p-2 w-full placeholder-[gray] bg text-xl' type='email' name='email' id='email' placeholder='Email'></input>
                  </div>
                  <div className='py-2'>
                    <input className='rounded-lg p-2 w-full placeholder-[gray] bg text-xl' type='number' name='postleitzahl' id='postleitzahl' placeholder='Postleitzahl'></input>
                  </div>
                </div>
                <div className='inline-block'>
                  <h2 className='text-3xl font-semibold py-3 text-white'>Gewünschte leistungen</h2>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                  <div className='py-2 items-center'>
                    <div className='py-2'>
                      <input id="bordered-checkbox-1" type="checkbox" name="innen&aussenputz" className="w-4 h-4 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600"></input>
                      <label className='px-[10px] text-white text-xl'>Innen & Außenputz</label>
                    </div>
                    <div className='py-2'>
                      <input id="bordered-checkbox-1" type="checkbox" name="Wärmedämmverbundsysteme" className="w-4 h-4 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600"></input>
                      <label className='px-[10px] text-white text-xl'>Wärmedämmverbundsysteme</label>
                    </div>
                    <div className='py-2'>
                      <input id="bordered-checkbox-1" type="checkbox" name="Altbausanierung" className="w-4 h-4 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600"></input>
                      <label className='px-[10px] text-white text-xl'>Altbausanierung</label>
                    </div>
                  </div>
                  <div className='py-2 items-center'>
                    <div className='py-2'>
                      <input id="bordered-checkbox-1" type="checkbox" name="Fugenarbeiten" className="w-4 h-4 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600"></input>
                      <label className='px-[10px] text-white text-xl'>Fugenarbeiten</label>
                    </div>
                    <div className='py-2'>
                      <input id="bordered-checkbox-1" type="checkbox" name="Spachtelarbeiten" className="w-4 h-4 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600"></input>
                      <label className='px-[10px] text-white text-xl'>Spachtelarbeiten</label>
                    </div>
                    <div className='py-2'>
                      <input id="bordered-checkbox-1" type="checkbox" name="Gebäudereinigung" className="w-4 h-4 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600"></input>
                      <label className='px-[10px] text-white text-xl'>Gebäudereinigung</label>
                    </div>
                  </div>
            </div>
          </form>
        </div>
    </div>
    </>
  )
}

export default projektanfrage