import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const projektanfrage = () => {
  return (
    <>
    <Navbar />
    <div className='w-full flex justify-center bg-[#064da0] inline-block'>
          <div className="p-[50px] inline-block max-w-max m-auto">
          <form action="https://getform.io/f/2d8e20cc-f6d8-40c7-9b5a-cbc31669a85d" method="POST">
            <div className='inline-block text-white headertext'>
                <h2 className='text-3xl font-semibold py-3'>Projeck Anfrage Formular</h2>
                <h2 className='text-xl py-2'>Wir realisieren ihre vision</h2>
                <p className='text-xl'>Nutzen Sie das unten stehende Formular und schildern Sie möglichst ausführlich Ihr Vorhaben.
                  <br />
                  Nennen Sie uns auch Ihren gewünschten Projektzeitraum.
                  <br />
                  Sie können zur Präzisierung des Vorhabens  Projektskizzen oder Grundrisse in den Formaten GIF, JPEG, doc, xls oder PDF hochladen.</p>
                  <p className='py-3 text-xl'>
                  Unser effizientes Büroteam wird sich innerhalb von 24 h an Werktagen bei Ihnen dazu melden.
                  <br />
                  Alle personenbezogenen Daten unterliegen der DSVGO.
                  </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
                <div>
                  <div className='py-2'>
                    <input className="rounded-lg p-2 w-full placeholder-[gray] bg text-xl" type='text' name='firma' id='firma' placeholder='Firma'></input>
                  </div>  
                  <div className='py-2'>
                    <input className="rounded-lg p-2 w-full placeholder-[gray] bg text-xl" type='number' name='telefon' id='telefon' placeholder='Telefon*' required></input>
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
                    <input className='rounded-lg p-2 w-full placeholder-[gray] bg text-xl' type='text' name='name' id='name' placeholder='Name*' required></input>
                  </div>
                  <div className='py-2'>
                    <input className='rounded-lg p-2 w-full placeholder-[gray] bg text-xl' type='email' name='email' id='email' placeholder='Email*' required></input>
                  </div>
                  <div className='py-2'>
                    <input className='rounded-lg p-2 w-full placeholder-[gray] bg text-xl' type='number' name='postleitzahl' id='postleitzahl' placeholder='Postleitzahl'></input>
                  </div>
                </div>
                <div className='inline-block'>
                  <h2 className='text-3xl font-semibold py-3 text-white headertext'>Gewünschte leistungen</h2>
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
                      <label className='px-[10px] text-white text-xl'>Wärmedämmverbundsystem</label>
                    </div>
                    <div className='py-2'>
                      <input id="bordered-checkbox-1" type="checkbox" name="Altbausanierung" className="w-4 h-4 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600"></input>
                      <label className='px-[10px] text-white text-xl'>Altbausanierung</label>
                    </div>
                    <div className='py-2 w-[50%]'>
                      <input className='rounded-lg p-2 w-full placeholder-[gray] bg text-xl' type='text' name='anders' id='anders' placeholder='Anders'></input>
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
            <div className='inline-block'>
                  <h2 className='text-3xl font-semibold py-3 text-white headertext'>Projektdauer*</h2>
            </div>
            <div className='inline-block grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-5'>
                  <div className='py-2'>
                    <label className='text-white text-md py-2'>Geplanter beginn*</label>
                    <input className='rounded-lg p-2 w-full placeholder-[gray] bg text-xl' type='date' name='geplanterbeginn' id='geplanterbeginn' placeholder='Geplanter beginn' required></input>
                  </div>
                  <div className='py-2'>
                    <label className='text-white text-md py-2'>Geplante fertigstellung*</label>
                    <input className='rounded-lg p-2 w-full placeholder-[gray] bg text-xl' type='date' name='geplantefertigstellung' id='geplantefertigstellung' placeholder='Geplante fertigstellung' required></input>
                  </div>
            </div>
            <div className='w-full'>
                  <h2 className='text-3xl font-semibold py-3 text-white headertext'>Projekt Beschreibung</h2>
                  <div className='inline-block w-full'>
                  <textarea
                className=" rounded-lg p-2 w-[100%] placeholder-[gray] bg-white text-xl"
                name="projectbeschreibung"
                type="text"
                placeholder='Projectbeschreibung*'
              ></textarea>
            </div>
            </div>
            <div className='inline-block'>
                  <h2 className='text-xl font-semibold py-3 text-white headertext'>Fügen sie ihrem projekt planungen, grundriss, leistungsverzeichnis oder skizzen bei</h2>
            </div>
            <div className='py-2'>
                <input id="bordered-checkbox-1" type="file" name="Gebäudereinigung" className='text-white'></input>
            </div>
            <div className='py-2 flex items-center'>
              <span><input type='checkbox' name='daten' required></input></span>
              <p className='text-lg px-4 text-white headertext'>Ich habe die Datenschutzerklärung zur Kenntnis genommen und erkläre mich damit einverstanden.*</p>
            </div>
            <div className="flex text-center items-center justify-around py-[50px]">
                <div className='rounded-lg text-xl'><button type='submit' className="p-4 w-auto rounded-lg shadow-lg bg-white text-[#064da0] hover:bg-[#0868d9]  hover:text-white hover:scale-[0.9] ease-in duration-200 transform-none">Absenden</button></div>
                <div className='rounded-lg text-xl'><button type='reset' className="p-4 w-auto rounded-lg shadow-lg bg-white text-[#064da0] hover:bg-[#0868d9] hover:text-white hover:scale-[0.9] ease-in duration-200 transform-none">Löschen</button></div> 
            </div>
          </form>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default projektanfrage