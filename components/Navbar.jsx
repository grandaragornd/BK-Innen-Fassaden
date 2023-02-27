import Link from 'next/link'
import React, {useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineWhatsApp, AiOutlineInstagram, AiOutlinePhone} from "react-icons/ai";
import Image from 'next/image';
import Logotrs from '../public/Logotrs.png'
import logotransparentwhite from '../public/logotransparentwhite.png'

/* navbar on scroll hide 

const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow(true); 
      } else { // if scroll up show the navbar
        setShow(false);  
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

*/
const Navbar = () => {

  const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(prev => !prev);
      };

    // HIDE ON SCROLL
    
    return <>
    <div className='w-full h-20 z-[100] inline-block'>
          <div className='flex justify-between items-center w-full h-20 bg-white fixed'>
            <div id='logo'>
            <Link href='/'>
                <div className='pl-[20px] flex items-center'>
                    <Image src={Logotrs} alt='logo' height='120' width='120' className='scale-[0.8]' priority></Image>
                    <span className='text-sm lg:inline-block hover:text-[#0868d9] inline-block'>BK Innenputz & Fassaden GmbH</span>  
                </div>
            </Link>
            </div>
            <div id='nav-links'>
              <ul className='uppercase hidden specialflex landscapemode'>
                    <Link href='/'><li className='text-lg hover:text-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'>Startseite</li></Link>
                    <Link href='/leistungen'><li className='text-lg hover:text-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'>Leistungen</li></Link>
                    <Link href='/projekte'><li className='text-lg hover:text-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'>Projekte</li></Link>
                    <Link href='/teams'><li className='text-lg hover:text-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'>Team</li></Link>
                    <Link href='/karriere'><li className='text-lg hover:text-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'>Karriere</li></Link>
                    <Link href='/kontakt' className='pr-4'><li className='text-lg hover:text-white hover:scale-[0.9] ease-in duration-200 transform-none bg-[#064da0] hover:bg-[#0868d9] text-white rounded-xl'>Kontakt</li></Link>
                    <Link href='/projektanfrage'><li className='text-lg hover:text-white hover:scale-[0.9] ease-in duration-200 transform-none bg-[#064da0] hover:bg-[#0868d9] text-white rounded-xl'>Projektanfrage</li></Link>
                </ul>
              </div>
              <div className='flex items-center pr-[25px] hidden socialbuttons'>
                        <a href="tel:4917636082388" data-replace="+4917636082388" id='animation' className='hover:w-[9rem] hover:bg-[#064da0] hover:p-[5px] hover:ml-[15px] hover:rounded-lg hover:ease-in duration-200 transform-none'><span className='px-[10px]' id='telefonenumber'><AiOutlinePhone size={25}/></span></a>
                        <li className='hover:text-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'><Link href='https://api.whatsapp.com/send/?phone=4917636082388&text&type=phone_number&app_absent=0' target='_blank'><AiOutlineWhatsApp size={25}></AiOutlineWhatsApp></Link></li>
                        <li className='hover:text-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'><Link href='https://www.instagram.com/bkgmbh/' target='_blank'><AiOutlineInstagram size={25}></AiOutlineInstagram></Link></li>
              </div>
              <div onClick={handleNav} className='hamburgertrigger cursor-pointer px-5'>
                  <AiOutlineMenu size={25}/>
              </div>
        </div>
        {/* END MAIN NAVBAR */}
        {/* PHONE/TABLET NAVBAR */}
            <div className={nav ? 'fixed left-0 top-0 w-full h-[150vh] bg-black/70' : ''}>
                <div className={
                  nav ? 'fixed absolute left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-[150vh] bg-[#064da0] ease-in duration-500'
                  : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                  }>
                    {/* INSIDEMENU */}
                    <div>
                        <div className='p-10 flex w-full items-center justify-between bg-[#064da0] text-white shadow-lg'>
                        <Image src={logotransparentwhite} alt='logo' height='150' width='150' priority></Image>
                            <div onClick={handleNav} className='rounded-full shadow-lg p-3 cursor-pointer'>
                            <AiOutlineClose size={25}/>
                            </div>
                        </div>
                        {/* INSIDEMENU sections */}
                        <div className='bg-[#064da0] overflow-scroll'>
                            <ul className='pt-[15px] uppercase text-center flex flex-col gap-10 text-white'>
                              <Link href='/'><li className='text-xl' onClick={handleNav}>Startseite</li></Link>
                              <Link href='/leistungen'><li className='text-xl' onClick={handleNav}>Leistungen</li></Link>
                              <Link href='/projekte'><li className='text-xl' onClick={handleNav}>projekte</li></Link>
                              <Link href='/teams'><li className='text-xl' onClick={handleNav}>team</li></Link>
                              <Link href='/karriere'><li className='text-xl' onClick={handleNav}>karriere</li></Link>
                              <Link href='/kontakt'><li className='text-xl' onClick={handleNav}>kontakt</li></Link>
                              <Link href='/projektanfrage'><li className='text-xl' onClick={handleNav}>projectanfrage</li></Link>
                            </ul>
                            <div className='flex items-center py-5 text-center justify-center text-white'>
                                <a href="tel:4917636082388" data-replace="+4917636082388" id='animation' className='hover:w-[9rem] hover:bg-[#064da0] hover:p-[5px] hover:ml-[15px] hover:rounded-lg hover:ease-in duration-200 transform-none'><span className='px-[10px]' id='telefonenumber'><AiOutlinePhone size={25}/></span></a>
                                <li className='hover:text-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'><Link href='https://api.whatsapp.com/send/?phone=4917636082388&text&type=phone_number&app_absent=0' target='_blank'><AiOutlineWhatsApp size={25}></AiOutlineWhatsApp></Link></li>
                                <li className='hover:text-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'><Link href='https://www.instagram.com/bkgmbh/' target='_blank'><AiOutlineInstagram size={25}></AiOutlineInstagram></Link></li>
                          </div>
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