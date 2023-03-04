import Navbar from '@/components/Navbar'
import React from 'react'
import Link from 'next/link'

const trockenbau = () => {
  return (
    <>
      <Navbar />
      <div className='w-full p-[50px] inline-block max-w-max m-auto'>
        <div>
          <h2 className='text-3xl py-3 font-semibold'>Trockenbau</h2>
          <p className='text-xl'>Stellenangebote (M/W/D)</p>
        </div>
        <div className='p-3'>
          <div className='text-xl'>
          <p className='font-semibold'>In Voll- oder Teilzeit
          mit mindestens drei Jahren Berufserfahrung</p>
          <br />
          <p>Vertragsdauer: unbefristet</p>

          <p className='font-semibold'>Ihre Aufgaben</p>
<ul className='py-2'>
  <li>• Trockenbauarbeiten: Verlegen von Gipsplatten sowie das Anbringen von Dämmungen zu Wärme-, Kälte- und Schallschutzzwecken, professionelle Schadensbeseitigung in Wohnungen, öffentlichen Gebäuden und Industrieanlagen</li>
  <li>• Einbau von Innenraumtüren</li>
  <li>• Herstellung von Ständerwerken und abgehängten Decken</li>
  <li>• Trockenputz und Spachtelarbeiten</li>
  <li>• Abbrucharbeiten</li>  
</ul>
 
<p className='font-semibold'>Unsere Anforderungen:</p>

<ul className='py-2'>
  <li>• gute Deutschkenntnisse in Wort und Schrift</li>
  <li>• Führerschein Klasse B</li>
  <li>• flexibles, selbständiges und gewissenhaftes Arbeiten</li>
  <li>• zuverlässige, selbständige, teamorientierte Arbeitsweise</li>
  <li>• Kunden- und unternehmensorientiertes Handeln</li>
  <li>• freundliches, respektvolles, kompetentes Auftreten</li>
  <li>• Bereitschaft zur Übernahme von Verantwortung</li>
</ul>

<p className='font-semibold'>Unser Angebot:</p>

<ul className='py-2'>
  <li>• Abwechslungsreiche Tätigkeit</li>
  <li>• Anspruchsvolle interessante Baustellen</li>
  <li>• kleine effektive Teams</li>
  <li>• Leistungsorientierte Vergütung</li>
  <li>• Entwicklungs- und Fortbildungsmaßnahmen</li>
  <li>• Gesundheitsvorsorge</li>
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
    </>
    
  )
}

export default trockenbau