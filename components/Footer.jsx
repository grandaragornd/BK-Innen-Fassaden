import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { AiOutlineWhatsApp, AiOutlineInstagram, AiOutlinePhone } from "react-icons/ai";
import logotransparentwhite from '../public/logotransparentwhite.png'

const Footer = () => {

  return (
    <>
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
  <a href="tel:4917636082388" data-replace="+4917636082388" id='animation' className='hover:w-[9rem] hover:bg-[#064da0] hover:p-[5px]  hover:rounded-lg hover:ease-in duration-200 transform-none'><span className='px-[10px]' id='telefonenumber'><AiOutlinePhone size={25}/></span></a>
    <li className='hover:scale-[0.9] ease-in duration-200 transform-none'><Link href='https://api.whatsapp.com/send/?phone=4917636082388&text&type=phone_number&app_absent=0' target='_blank'><AiOutlineWhatsApp size={25}></AiOutlineWhatsApp></Link></li>
    <li className='hover:scale-[0.9] ease-in duration-200 transform-none'><Link href='https://www.instagram.com/bkgmbh/' target='_blank'><AiOutlineInstagram size={25}></AiOutlineInstagram></Link></li>
  </ul>
  </div>
  <div className='py-5 bg-[#064da0] text-white px-[50px]'>
    <ul className='grid grid-cols-1 sm:grid-cols-3 text-center'>
      <Link href='/leistungen#innen'><li>Innen&Außenputz</li></Link>
      <Link href='/leistungen#fugen'><li>Fugenarbeiten</li></Link>
      <Link href='/leistungen#warme'><li>Wärmedämmverbundsysteme</li></Link>
      <Link href='/leistungen#spach'><li>Spachtelarbeiten</li></Link>
      <Link href='/leistungen#altbau'><li>Altbausanierung</li></Link>
      <Link href='/leistungen#gebau'><li>Gebäudereinigung</li></Link>
    </ul>
  </div>
  </>
  )
}

export default Footer