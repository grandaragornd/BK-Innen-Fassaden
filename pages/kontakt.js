import Form from '@/components/Form'
import React from 'react'

const kontakt = () => {
  return (
      <main className='w-full place-items-center headerbackground headertext inline-block h-screen'>
      {/*contact card*/}
      <div className="flex">
        <div className="max-w-full m-auto items-center gap-10">
          <div className="p-5 w-auto block">
          <form action="https://getform.io/f/86537289-4693-4bb5-b5fa-ef02736c1a18" method="POST">
            <div className='inline-block'>
                <h2 className='text-2xl font-semibold py-3 text-white'>Kontakt Formular</h2>
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
              <span><input type='checkbox' required ></input></span>
              <p className='text-lg px-4 text-white'>Ich habe die Datenschutzerklärung zur Kenntnis genommen und erkläre mich damit einverstanden.</p>
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

export default kontakt