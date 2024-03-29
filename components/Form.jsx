import React from 'react'
import Image from 'next/image'

const Form = () => {
  return (
    <main className='w-full flex justify-center'>
      {/*contact card*/}
      <div className="flex ">
        <div className="max-w-full m-auto items-center gap-10">
          <div className="p-[50px] w-auto block">
          <form action="https://getform.io/f/2d8e20cc-f6d8-40c7-9b5a-cbc31669a85d" method="POST">
            <div className='inline-block'>
                <h2 className='text-3xl font-semibold py-3'>Kontakt Formular</h2>
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
              <span><input type='checkbox' name='daten' required></input></span>
              <p className='text-lg px-4'>Ich habe die Datenschutzerklärung zur Kenntnis genommen und erkläre mich damit einverstanden.</p>
            </div>
            <div className="flex text-center items-center justify-around">
                <div className='rounded-lg text-xl'><button className="p-4 w-auto rounded-lg shadow-lg bg-[#064da0] text-white hover:bg-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none">Absenden</button></div>
                <div className='rounded-lg text-xl'><button type='reset' className="p-4 w-auto rounded-lg shadow-lg bg-[#064da0] text-white hover:bg-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none">Löschen</button></div> 
            </div>
          </form>
          </div>
        </div>
      </div>
      </main>
  )
}

export default Form