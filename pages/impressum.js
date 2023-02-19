import Navbar from '@/components/Navbar'
import React from 'react'

const impressum = () => {
  return (
    <>
    <Navbar />
    <div className='inline-block'>
        <div className='p-[40px]'>
        <div className='p-4'>
            <h2 className='text-3xl py-2'>Impressum</h2>
            <p className='text-2xl py-2'>BK Innenputz & Fassaden GmbH</p>
        </div>
        <div className='p-4'>
            <p className='text-xl'>Brandstücken 23<br/>
                22549 Hamburg<br />
                Deutschland<br />
            </p>
        </div>
        <div className='p-4'>
            <p className='text-xl'>
            Telefon: 04018185104
            <br />
            Fax: 04018185106
            <br />
            Mail: Info@bk-bauputz-hh.de
            <br />
            Geschäftsführer: Hüseyin Kapici
            <br />
            Handelsregister: Amtsgericht Hamburg, HRB 162 891
            <br />
            Umsatzsteuer-Identifikationsnummer(n): DE330513108
            <br />
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie hier finden https://ec.europa.eu/consumers/odr/. Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht bereit.
            </p>
        </div>
        </div>
    </div>
    </>
  )
}

export default impressum