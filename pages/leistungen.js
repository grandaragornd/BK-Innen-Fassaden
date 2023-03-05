import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'
import {AiOutlineArrowDown} from 'react-icons/ai'
import CustomNavbar from '@/components/CustomNavbar'
import CustomFooter from '@/components/CustomFooter'

const leistungen = () => {
  return (
    <>
    {/* custom navbar */}
    <CustomNavbar />
    {/* End custom navbar */}
    <div class="inline-block">
      <div className='p-5 py-5 w-full'>
        <h2 className='text-4xl font-semibold'>Unsere Leistungen im Überblick</h2>
      </div>
      <div className='p-4 w-full inline-block'>
        <div className='text-center text-white grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        <Link to='innen'spy={true} smooth={true} offset={50} duration={500} activeClass='active'>
            <div className='rounded-lg p-2 cursor-pointer bg-[#064da0] text-xl hover:bg-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'>
                 <h2 className='py-2'>Innen & Außenputz</h2>
                 <AiOutlineArrowDown  size={25} className='w-full'/>
            </div>
        </Link>
        <Link to='fugen'spy={true} smooth={true} offset={50} duration={500} activeClass='active'>
            <div className='rounded-lg p-2 cursor-pointer m-auto bg-[#064da0] text-xl hover:bg-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'>
                <h2 className='py-2'>Fugenarbeiten</h2>
                <AiOutlineArrowDown  size={25} className='w-full'/>
            </div>
        </Link>
        <Link to='warme'spy={true} smooth={true} offset={50} duration={500} activeClass='active'>
            <div className='rounded-lg p-2 cursor-pointer m-auto bg-[#064da0] text-xl hover:bg-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'>
                <h2 className='py-2'>Wärmedämmverbundsysteme</h2>
                <AiOutlineArrowDown  size={25} className='w-full'/>
            </div>
        </Link>
        <Link to='spach'spy={true} smooth={true} offset={50} duration={500} activeClass='active'>
            <div className='rounded-lg p-2 cursor-pointer m-auto bg-[#064da0] text-xl hover:bg-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'>
                <h2 className='py-2'>Spachtelarbeiten</h2>
                <AiOutlineArrowDown  size={25} className='w-full'/>
            </div>
        </Link>
        <Link to='altbau'spy={true} smooth={true} offset={50} duration={500} activeClass='active'>
            <div className='rounded-lg p-2 cursor-pointer m-auto bg-[#064da0] text-xl hover:bg-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'>
                <h2 className='py-2'>Altbausanierung</h2>
                <AiOutlineArrowDown  size={25} className='w-full'/>
            </div>
        </Link>
        <Link to='gebau'spy={true} smooth={true} offset={50} duration={500} activeClass='active'>
            <div className='rounded-lg p-2 cursor-pointer m-auto bg-[#064da0] text-xl hover:bg-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'>
                <h2 className='py-2'>Gebäudereinigung</h2>
                <span id='innen'></span>
                <AiOutlineArrowDown  size={25} className='w-full'/>
            </div>
        </Link>
        </div>
      </div>

        <div className="px-[40px] flex-col grid sm:grid-cols-1 gap-4">

          {/* comments */}
            <div className="w-full p-5 inline-block grid grid-cols-1 sm:grid-cols-2 items-center gap-5">
                <div className='flex justify-center'>
                    <Image className='rounded-xl' src='https://jimdo-storage.freetls.fastly.net/image/170285040/29a433da-d81a-488b-8495-1fe22a0281f9.jpg?format=pjpg&quality=80,90&auto=webp&disable=upscale&width=1280&height=1180&trim=0,837,0,837' height='250' width='500'/>
                </div>
                <div className='py-5'>
                    <h2 className="text-2xl font-bold py-3">Innen & Außenputz</h2>
                    <p className="text-xl">
                        Sie sind dabei ein Bauvorhaben zu starten, oder möchten ein renovierungsbedürftiges Gebäude sanieren?
                        Dann ist der Putz für Sie das Optimalste, denn
                        Ausschlaggebend für den besten Schutz und die Gestaltung ihrer Wände ist die richtige Wahl des Putzes. Für den Schutz Ihres Mauerwerkes oder für die Neugestaltung Ihrer Räumlichkeiten, finden wir die exzellente Lösung für Ihr Bauvorhaben.
                    </p>
                    <span id='fugen'></span>
                </div>
            </div>
            
            <div className="w-full inline-block p-5 grid grid-cols-1 sm:grid-cols-2 items-center gap-5">
                <div className='flex justify-center'>
                    <Image className='rounded-xl'  src='https://jimdo-storage.freetls.fastly.net/image/170285344/35d974b5-f83a-40ce-a7fe-f9dea1c053f7.jpg?format=pjpg&quality=80,90&auto=webp&disable=upscale&width=1280&height=1024&trim=0,480,0,480' height='250' width='500'/>
                </div>
                <div className="py-5">
                    <h5 className="text-2xl font-bold py-3" >Fugenarbeiten</h5>
                    <p className="text-xl">
                    Das wechselnde Klima/Wetter strapaziert sowohl Wände als auch Mauerwerke. Unsere qualifizierten Arbeiter sind darauf spezialisiert jegliche Fugen in Mauerwerken zu erneuern oder Wände vollständig zu sanieren.
                    </p>
                    <span id='warme'></span>
                </div>
            </div>
            <div className="w-full inline-block p-5 grid grid-cols-1 sm:grid-cols-2 items-center gap-5" >
                <div className='flex justify-center'>
                    <Image className='rounded-xl'  src='https://jimdo-storage.freetls.fastly.net/image/170286259/ce965f6b-177d-4294-8ba6-db5bf9183137.jpg?format=pjpg&quality=80,90&auto=webp&disable=upscale&width=1280&height=1229&trim=0,1375,0,1375' height='250' width='500'/>
                </div>
                <div className="py-5" >
                    <h5 className="text-2xl font-bold py-3">Wärmedämmverbundsysteme</h5>
                    <p className="text-xl">
                    Mit Wärmedämmverbundsystemen (WDVS) bieten wir Ihnen eine wärmende Hülle für Ihre Außenwände, welche dazu beiträgt die Wärme im Gebäude zuhalten.
                    </p>
                    <span id='spach'></span>
                </div>
            </div>
            <div className="w-full inline-block p-5 grid grid-cols-1 sm:grid-cols-2 items-center gap-5" >
                <div className='flex justify-center'>
                    <Image className='rounded-xl'  src='https://jimdo-storage.freetls.fastly.net/image/170286505/a254ee21-d44c-459d-bd94-9c681a2816b5.jpg?format=pjpg&quality=80,90&auto=webp&disable=upscale&width=1440&height=1154&trim=0,445,0,446' height='250' width='500'/>
                </div>
                <div className="py-5">
                    <h5 className="text-2xl font-bold py-3">Spachtelarbeiten</h5>
                    <p className="text-xl">
                    Obgleich es sich um Ausbesserungsarbeiten von Rissen innerhalb eines Mauerwerks oder die Verspachtelung von neu-installierten Wänden handelt, stehen wir Ihnen mit unserem Know-How zur Seite.
                    </p>
                    <span id='altbau'></span>
                </div>
            </div>
            <div className="w-full inline-block p-5 grid grid-cols-1 sm:grid-cols-2 items-center gap-5" >
                <div className='flex justify-center'>
                    <Image className='rounded-xl'  src='https://jimdo-storage.freetls.fastly.net/image/170286714/eabce42f-8759-4814-bf7d-df5b03391d3d.jpg?format=pjpg&quality=80,90&auto=webp&disable=upscale&width=1440&height=1259&trim=0,768,0,887' height='250' width='500'/>
                </div>
                <div className="py-5" >
                    <h5 className="text-2xl font-bold py-3">Altbausanierung</h5>
                    <p className="text-xl">
                    Lassen Sie Altbauten im neuen Glanz erstrahlen! Dank jahrelanger Erfahrung bieten wir einzigartige Altbausanierungsarbeiten an. Unser Team führt die Wiederinstandsetzung und die energetische Sanierung gemäß neuester Standards durch.
                    </p>
                    <span id='gebau'></span>
                </div>
            </div>
            <div className="w-full inline-block p-5 grid grid-cols-1 sm:grid-cols-2 items-center gap-5" >
                <div className='flex justify-center'>
                    <Image className='rounded-xl'  src='https://jimdo-storage.freetls.fastly.net/image/170287218/d3a5d2ac-0d2b-4af6-8224-d9f82fd8f2c5.jpg?format=pjpg&quality=80,90&auto=webp&disable=upscale&width=1440&height=1153&trim=0,500,0,500' height='250' width='500'/>
                </div>
                <div className="py-5" >
                    <h5 className="text-2xl font-bold py-3">Gebäudereinigung</h5>
                    <p className="text-xl">
                    Sie brauchen eine professionelle Gebäudereinigung?
                    Dann sind Sie ebenfalls bei uns an der richtigen Adresse. Wir bieten Ihnen eine professionelle Unterhaltsreinigung für ihre Gewerbefläche an. Ob in Gastronomie, Büro, Einzelhandelsfläche etc., sind wir stets für Sie da und bereit alles auf Vordermann zu bringen.
                    Zusammen mit Ihnen werden wir Ihre zu gereinigt werdende Gewerbefläche einsehen, um einen optimalen Reinigungsplan für die Zusammenarbeit zu fertigen.
                    </p>
                </div>
            </div> 

        </div>

        <div className='p-4 w-full inline-block'>
        <div className='text-center text-white grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        <Link to='innen' spy={true} smooth={true} offset={50} duration={500}>
            <div className='rounded-lg p-2 cursor-pointer bg-[#064da0] text-xl hover:bg-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'>
                 <h2 className='py-2'>Innen & Außenputz</h2>
                 <AiOutlineArrowDown  size={25} className='w-full'/>
            </div>
        </Link>
        <Link to='fugen'spy={true} smooth={true} offset={50} duration={500} activeClass='active'>
            <div className='rounded-lg p-2 cursor-pointer m-auto bg-[#064da0] text-xl hover:bg-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'>
                <h2 className='py-2'>Fugenarbeiten</h2>
                <AiOutlineArrowDown  size={25} className='w-full'/>
            </div>
        </Link>
        <Link to='warme'spy={true} smooth={true} offset={50} duration={500} activeClass='active'>
            <div className='rounded-lg p-2 cursor-pointer m-auto bg-[#064da0] text-xl hover:bg-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'>
                <h2 className='py-2'>Wärmedämmverbundsysteme</h2>
                <AiOutlineArrowDown  size={25} className='w-full'/>
            </div>
        </Link>
        <Link to='spach'spy={true} smooth={true} offset={50} duration={500} activeClass='active'>
            <div className='rounded-lg p-2 cursor-pointer m-auto bg-[#064da0] text-xl hover:bg-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'>
                <h2 className='py-2'>Spachtelarbeiten</h2>
                <AiOutlineArrowDown  size={25} className='w-full'/>
            </div>
        </Link>
        <Link to='altbau'spy={true} smooth={true} offset={50} duration={500} activeClass='active'>
            <div className='rounded-lg p-2 cursor-pointer m-auto bg-[#064da0] text-xl hover:bg-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'>
                <h2 className='py-2'>Altbausanierung</h2>
                <AiOutlineArrowDown  size={25} className='w-full'/>
            </div>
        </Link>
        <Link to='gebau'spy={true} smooth={true} offset={50} duration={500} activeClass='active'>
            <div className='rounded-lg p-2 cursor-pointer m-auto bg-[#064da0] text-xl hover:bg-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'>
                <h2 className='py-2'>Gebäudereinigung</h2>
                <span id='innen'></span>
                <AiOutlineArrowDown  size={25} className='w-full'/>
            </div>
        </Link>
        </div>
      </div>

    </div>
    <CustomFooter />
    </>
  )
}

export default leistungen