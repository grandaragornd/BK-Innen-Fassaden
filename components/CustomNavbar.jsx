import React, {useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Logotrs from '../public/Logotrs.png'
import logotransparentwhite from '../public/logotransparentwhite.png'
import { AiOutlineClose, AiOutlineMenu, AiOutlineWhatsApp, AiOutlineInstagram} from "react-icons/ai";

const CustomNavbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(prev => !prev);
      };

    // HIDE ON SCROLL
    const [prevScrollPos, setPrevScrollPos] = useState(0);
const [visible, setVisible] = useState(true)

const handleScroll = () => {
    const currentScrollPos = window.scrollY

    if(currentScrollPos > prevScrollPos){
        setVisible(false)
    }else{
        setVisible(true)
    }

    setPrevScrollPos(currentScrollPos)
}

useEffect( () => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
})
    return <>
    <div className='w-full h-20 z-[100] inline-block '>
          <div className={`${visible ? '' : 'hidden'} `} id='navbar'>
          <div className='flex justify-between items-center w-full h-20 bg-white shadow-lg fixed'>
          <Link href='/'>
                <div className='pl-[20px] flex items-center'>
                    <Image src={Logotrs} alt='logo' height='120' width='120' className='scale-[0.8]' priority></Image>
                    <p className='text-sm hover:text-[#0868d9] inline-block'>BK Innenputz & Fassaden GmbH</p>  
                </div>
            </Link>
            <div className='px-[20px]'>
                <ul className='uppercase hidden md:flex'>
                    <Link href='/'><li className='text-xl hover:text-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'>Startseite</li></Link>
                    <Link href='/leistungen'><li className='text-xl hover:text-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'>Leistungen</li></Link>
                    <Link href='/projekte'><li className='text-xl hover:text-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'>Projekte</li></Link>
                    <Link href='/teams'><li className='text-xl hover:text-[#0868d9] hover:scale-[0.9] ease-in duration-200 transform-none'>Team</li></Link>
                    <Link href='/kontakt' className='px-5'><li className='text-xl hover:text-white hover:scale-[0.9] ease-in duration-200 transform-none bg-[#064da0] hover:bg-[#0868d9] text-white rounded-xl'>Kontakt</li></Link>
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
                        <Image src={logotransparentwhite} alt='logo' height='150' width='150'></Image>
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
                              <Link href='/teams'><li className='text-xl' onClick={handleNav}>team</li></Link>
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

export default CustomNavbar