import ContactForm from '@/components/ContactForm'
import Navbar from '@/components/Navbar'
import React from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'

const karriere = () => {
  return (
    <>
        <Navbar />
        <div className='w-full p-[50px] inline-block max-w-max m-auto'>
            <div className='p-5 justify-center'>
                <h2 className='text-4xl font-semibold'>Unsere stellenangebote</h2>
            </div>
            <div className='p-5'>
                <p className='text-xl py-3'>
                Bk-innenputz und Fassaden ist seit Jahren ein fester Bestandteil der norddeutschen Baubranche und immer auf neue Projekte vorbereitet und einen stetigen Wachstum gewaffnet. Unser Unternehmen besteht aus Fachkräften und einem hocheffizienten Büro Team. Für die Verstärkung unseres Personals suchen wir immer neue Mitarbeiter und freuen uns auf die Zusammenarbeit. Auf sie warten vielfältige Aufgaben, spanndende Konstellationen mit anderen neuen Firmen und neuen Herausforderungen. Wenn sie sich für eine Karriere in einem Team vorstellen können, bewerben sie sich gerne bei uns.
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
        <Footer />
    </>
  )
}

export default karriere