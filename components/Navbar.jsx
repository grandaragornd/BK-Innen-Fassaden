
import Link from 'next/link'
import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineWhatsApp, AiOutlineInstagram} from "react-icons/ai";
import { Logobk, Logosmall } from './svgs';



const Navbar = () => {

  const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(prev => !prev);
      };

    return <>
        <div className='w-full h-20 z-[100] inline-block'>
          {/* MAIN NAVBAR */}
          <div className='flex justify-between items-center w-full h-20 bg-white shadow-lg fixed'>
                <Link href='./' className='pl-[20px] flex items-center'>
                    <Logosmall />
                    <p className='text-md'>BK Innenputz & Fassaden GmbH</p>
                </Link>
            <div className='px-[20px]'>
                <ul className='uppercase hidden md:flex'>
                    <Link href='/'><li className='text-xl hover:text-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'>Startseite</li></Link>
                    <Link href='/leistungen'><li className='text-xl hover:text-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'>Leistungen</li></Link>
                    <Link href='/projekte'><li className='text-xl hover:text-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'>Projekte</li></Link>
                    <Link href='/kontakt' className='px-5'><li className='text-xl hover:text-white hover:scale-[0.9] ease-in duration-200 transform-none bg-[#064da0] text-white rounded-xl'>Kontakt</li></Link>
                    <div className='flex px-[30px] items-center'>
                        <li className='hover:text-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'><Link href='https://api.whatsapp.com/send/?phone=4917636082388&text&type=phone_number&app_absent=0' target='_blank'><AiOutlineWhatsApp size={25}></AiOutlineWhatsApp></Link></li>
                        <li className='hover:text-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'><Link href='https://www.instagram.com/bkgmbh/' target='_blank'><AiOutlineInstagram size={25}></AiOutlineInstagram></Link></li>
                    </div>
                </ul>
                <div onClick={handleNav} className='md:hidden cursor-pointer px-5'>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
        </div>
        {/* END MAIN NAVBAR */}
        {/* PHONE/TABLET NAVBAR */}
            <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={
                  nav ? 'fixed absolute left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#064da0] ease-in duration-500'
                  : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                  }>
                    {/* INSIDEMENU */}
                    <div>
                        <div className='p-10 flex w-full items-center justify-between bg-[#064da0] text-white shadow-lg'>
                            <h2 className='text-white text-3xl'>BK</h2>
                            <div onClick={handleNav} className='rounded-full shadow-lg p-3 cursor-pointer'>
                            <AiOutlineClose size={25}/>
                            </div>
                        </div>
                        {/* INSIDEMENU sections */}
                        <div className='bg-[#064da0] m-auto overflow-y-auto'>
                            <ul className='pt-[15px] uppercase text-center flex flex-col gap-10 text-white'>
                              <Link href='/'><li className='text-xl' onClick={handleNav}>Startseite</li></Link>
                              <Link href='/leistungen'><li className='text-xl' onClick={handleNav}>Leistungen</li></Link>
                              <Link href='/projekte'><li className='text-xl' onClick={handleNav}>projekte</li></Link>
                              <Link href='/kontakt'><li className='text-xl' onClick={handleNav}>kontakt</li></Link>
                            </ul>
                        </div>
                        {/* end section */}
                    </div>
                    {/* END INSIDEMENU */}
                </div>
            </div>
        </div>
    </>
}

export default Navbar