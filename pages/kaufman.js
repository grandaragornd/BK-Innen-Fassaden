import Navbar from '@/components/Navbar'
import React from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'

const kaufman = () => {
  return (
    <>
    <Navbar />
    <div className='w-full p-[50px] inline-block max-w-max m-auto'>
        <div>
          <h2 className='text-3xl py-3 font-semibold'>Kaufmänischer Angesteller</h2>
          <p className='text-xl'>Stellenangebote (M/W/D)</p>
        </div>
        <div className='p-3'>
          <div className='text-xl'>
          <p className='font-semibold'>In Voll- oder Teilzeit
          Berufserfahrung wünschenswert</p>
          <br />
          <p>Vertragsdauer: unbefristet</p>

          <p className='font-semibold'>Ihre Aufgaben</p>
<ul className='py-2'>
  <li>• Erstellung und Pflege von Rahmen­verträgen mit Unternehmen in der Baubranche</li>
  <li>• Lieferanten­angebote einholen und prüfen, interne Angebote erstellen</li>
  <li>• Aufträge an Lieferanten erteilen</li>
  <li>• Rechnungs­kontrolle und -buchung, Fakturierung durchführen</li>
  <li>• Nachkalkulation von Projekten</li>
  <li>• Ressourcen-, Terminplanung und -controlling</li>
  <li>• Projekt­management bei Großbaustellen</li>
  <li>• Sicher­stellung einer engen Zusammen­arbeit aller Bereiche im Bauprozess</li>
  <li>• Dokumentation und Archivierung</li>
</ul>
 
<p className='font-semibold'>Unsere Anforderungen:</p>

<ul className='py-2'>
  <li>• Kaufmännische Ausbildung mit tech­nischem Grundlagen­wissen oder fundierter, langjähriger Erfah­rung im technischen Bereich</li>
  <li>• Kunden­orientierung</li>
  <li>• Organi­sations­stärke sowie Qualitäts- und Kosten­bewusstsein</li>
  <li>• Prozess- und Projekt­orientierung</li>
  <li>• Persönliche Souveränität und Kommunikationsstärke</li>
  <li>• Engagement, Flexibilität, Kreativität, Teamorientierung, Belastbarkeit</li>
  <li>• Sichere IT-/PC-Kenntnisse</li>
</ul>

<p className='font-semibold'>Unser Angebot:</p>

<ul className='py-2'>
  <li>• Ein attraktives Ver­gütungs­modell und besondere Sozial­leistungen</li>
  <li>• Ein moderner Arbeitsplatz</li>
  <li>• Betriebliches Gesundheits­management und flexible Gleitzeit­modelle</li>
  <li>• 30 Tage Urlaub</li>
</ul>
          </div>
        </div>
        <div className='grid center col-span-1'>
            <Link href='/bewerbung'>
        <div className='cursor-pointer text-center rounded-lg bg-[#064da0] h-[200px] text-white hover:bg-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'>
                    <div className='font-semibold sm:text-4xl text-3xl py-[50px]'>
                        <p>JETZT</p>
                        <p>BEWERBEN</p>
                    </div>
                </div>
                </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default kaufman