import React from 'react'

const BewerbungForm = () => {
  return (
    <div className='inline-block w-full flex justify-center bg-[#064da0]'>
        <div className="p-[50px] inline-block max-w-max m-auto">
        <form action="https://getform.io/f/2d8e20cc-f6d8-40c7-9b5a-cbc31669a85d" method="POST">
            <div className='inline-block text-white headertext'>
                <h2 className='text-3xl font-semibold py-3'>Bewerbung Formular</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
                <div>
                  <div className='py-2'>
                    <input className='rounded-lg p-2 w-full placeholder-[gray] bg text-xl' type='text' name='name' id='name' placeholder='Name*' required></input>
                  </div>
                  <div className='py-2'>
                    <input className='rounded-lg p-2 w-full placeholder-[gray] bg text-xl' type='email' name='email' id='email' placeholder='Email*' required></input>
                  </div>
                </div>
                <div>  
                  <div className='py-2'>
                    <input className="rounded-lg p-2 w-full placeholder-[gray] bg text-xl" type='number' name='telefon' id='telefon' placeholder='Telefon*' required></input>
                  </div> 
                </div>
                
                <div className='inline-block'>
                  <h2 className='text-3xl font-semibold py-3 text-white headertext'>Ich bin:</h2>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                  <div className='py-2 items-center'>
                    <div className='py-2'>
                      <input id="bordered-checkbox-1" type="checkbox" name="meister" className="w-4 h-4 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600"></input>
                      <label className='px-[10px] text-white text-xl'>Meister</label>
                    </div>
                    <div className='py-2'>
                      <input id="bordered-checkbox-1" type="checkbox" name="hilfsarbeiter" className="w-4 h-4 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600"></input>
                      <label className='px-[10px] text-white text-xl'>Hilfsarbeiter</label>
                    </div>
                  </div>
                  <div className='py-2 items-center'>
                    <div className='py-2'>
                      <input id="bordered-checkbox-1" type="checkbox" name="facharbeiter" className="w-4 h-4 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600"></input>
                      <label className='px-[10px] text-white text-xl'>Facharbeiter</label>
                    </div>
                  </div>
            </div>
            <div className='w-full'>
                  <h2 className='text-3xl font-semibold py-3 text-white headertext'>Anschreiben</h2>
                  <div className='inline-block w-full'>
                  <textarea
                className=" rounded-lg p-2 w-[100%] placeholder-[gray] bg-white text-xl"
                name="anschreiben"
                type="text"
                placeholder='anschreiben'
              ></textarea>
            </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                    <div>
                        <h2 className='text-xl font-semibold py-3 text-white headertext'>Lichtbild</h2> 
                        <input id="bordered-checkbox-1" type="file" name="Lichtbild" className='text-white'></input>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold py-3 text-white headertext'>Lebenslauf</h2> 
                        <input id="bordered-checkbox-1" type="file" name="Lebenslauf" className='text-white'></input>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold py-3 text-white headertext'>Zeugnisse</h2> 
                        <input id="bordered-checkbox-1" type="file" name="zeugnisse" className='text-white'></input>
                    </div>
            </div>
            
            <div className='py-2 flex items-center'>
              <span><input type='checkbox' name='daten' required></input></span>
              <p className='text-lg px-4 text-white headertext'>Ich habe die Datenschutzerklärung zur Kenntnis genommen und erkläre mich damit einverstanden.*</p>
            </div>
            <div className="flex text-center items-center justify-around pt-[50px]">
                <div className='rounded-lg text-xl'><button type='submit' className="p-4 w-auto rounded-lg shadow-lg bg-white text-[#064da0] hover:bg-[#0868d9]  hover:text-white hover:scale-[0.9] ease-in duration-200 transform-none">Absenden</button></div>
                <div className='rounded-lg text-xl'><button type='reset' className="p-4 w-auto rounded-lg shadow-lg bg-white text-[#064da0] hover:bg-[#0868d9] hover:text-white hover:scale-[0.9] ease-in duration-200 transform-none">Löschen</button></div> 
            </div>
          </form>
        </div>
    </div>
  )
}

export default BewerbungForm