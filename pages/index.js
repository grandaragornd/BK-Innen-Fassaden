
import ContactForm from '@/components/ContactForm'
import Form from '@/components/Form'
import Header from '@/components/Header'
import { Logobk } from '@/components/svgs'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>BK Innenputz & Fassaden GmbH | Startseite</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className='w-full inline-block grid grid-cols-1 sm:grid-cols-2'>
        <div className='w-full p-[50px]'>
            <h2 className='text-2xl font-semibold'>Das Bauunternehmen aus Hamburg fur vielfaltige Bauvorhaven</h2>
            <p className='text-xl py-10'>Herzlich Willkommen bei BK Innenputz & Fassadem Gmbh, <br /> Eine gute Bauwiese allein macht nock keine gute Maschine. Sie sollte bestandig und zuverlassig sein und dabei ihr Leben leichter machen. Unsere Arbeiten erfullen diesen Anspruch.</p>
        </div>
        <div className='w-full p-[50px]'>
          <h2 className='text-2xl font-semibold'>Unsere Leistungen</h2>
          <p className='py-5 text-xl'>
          Die BK Innenputz & Fassaden GmbH ist Ihr zuverlässiger, treuer und fairer Ansprechpartner für Bauvorhaben jeglicher Art in Norddeutschland. 
          Unsere Mitarbeiter mit jeweils 20 Jahren Erfahrung auf den jeweiligen Gebieten, werden sich sauber, fachgerecht und professionell um ihr Vorhaben kümmern.
          Unser Angebotsspektrum umfasst einzelne Baureparaturen bis hin zum Neubau:
          </p>
          <Link href='/leistungen'>
          <button className='p-4 w-auto rounded-lg shadow-lg bg-[#064da0] text-white text-xl hover:bg-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'>Mehr Erfahren!</button>
          </Link>
        </div>
      </div>

      <section className='h-auto w-full grid grid-cols-1 sm:grid-cols-2'>
        <div className='flex justify-center items-center'>
            <Logobk/>
        </div>
        <div className='container p-[50px] w-auto'>
            <h2 className='text-3xl py-3 font-semibold'>Unser Team</h2>
            <p className='py-2 text-xl'>Wir sind mehr als ein nur ein Haufen gewöhnliche Arbeiter: Bei uns arbeiten kluge Köpfe als Freunde zusammen. Gemeinsam stecken wir viel Freude und Leidenschaft in unsere Arbeit, das zeichnet uns aus.
            Als kompetenter Allrounder in allen Bereichen rund um Sanierung und Umbau, bilden Qualität, Zuverlässigkeit und Einsatz das Wertesystem unseres Unternehmens. Unser Ziel ist es, jeden einzelnen unserer Kunden stets mit fachgerecht erstklassiger Arbeit nach höchstem Qualitätsstandard zufrieden zu stellen. 
            Mehr als 30-jährige Erfahrung im Baugewerbe stehen für Qualität und Zuverlässigkeit.</p>
            <Link href='/kontakt'>
            <button className='p-4 w-auto rounded-lg shadow-lg bg-[#064da0] text-white text-xl hover:bg-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'>Karriere!</button>
            </Link>
        </div>
      </section>
      <Form />
      <ContactForm />
    </>
  )
}
