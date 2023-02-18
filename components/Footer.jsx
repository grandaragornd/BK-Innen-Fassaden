import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";
import logotransparentwhite from '../public/logotransparentwhite.png'

const Footer = () => {
  return (
    <div className='p-5 w-full items-center justify-between flex bg-[#064da0] text-white h-[15vh] inline-block'>
      <div className='flex flex-col text-center'>
        <Link href='/'>
        <Image src={logotransparentwhite} alt='logo' height='110' width='110'></Image>
        </Link>
      </div>
      
    <ul className='text-sm text-center flex text-white uppercase'>
      <li className='cursor-pointer hover:scale-[0.9] ease-in duration-200 transform-none'><Link href='/impressum'>Impressum</Link></li>
      <li className='cursor-pointer hover:scale-[0.9] ease-in duration-200 transform-none'><Link href='/datenschutz'>Datenschutz</Link></li>
    </ul>
    <ul className='flex justify-around text-center items-center'>
      <li className='hover:scale-[0.9] ease-in duration-200 transform-none'><Link href='https://api.whatsapp.com/send/?phone=4917636082388&text&type=phone_number&app_absent=0' target='_blank'><AiOutlineWhatsApp size={25}></AiOutlineWhatsApp></Link></li>
      <li className='hover:scale-[0.9] ease-in duration-200 transform-none'><Link href='https://www.instagram.com/bkgmbh/' target='_blank'><AiOutlineInstagram size={25}></AiOutlineInstagram></Link></li>
    </ul>
    </div>
  )
}

export default Footer