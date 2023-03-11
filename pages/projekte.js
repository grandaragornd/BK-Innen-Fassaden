import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import React from 'react';

const projekte = () => {
  
  return (
    <>
    <Navbar />
    <div className='inline-block h-screen p-4 flex justify-center flex-col items-center'>
      <h1 className='text-4xl text-center'>Coming soon!</h1>
      <div className='p-5 inline-block'>
      <Image src='https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80'
        height='1000'
        width='1000'
        sizes='cover'
        className='rounded-xl'
      ></Image>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default projekte
