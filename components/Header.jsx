import React from 'react'


const Header = () => {
  return (
    <>
    <div className='headerbackground h-[70vh]'>
        {/*}<div className='top-0 left-0 right-0 bottom-0 bg-black/70 h-[60vh] z-[1]'></div>{*/}
        <div className='text-center w-full items-center py-[150px]' id='header'>
          <h2 className='text-5xl font-semibold text-[white] headertext uppercase'>BK Innenputz & Fassaden GmbH</h2>
          <div className='slider-wrapper'>
            <div className='slider text-2xl text-white hover:scale-[0.9] ease-in duration-200 transform-none'>
              <div className='slider-text1'>beständig</div>
              <div className='slider-text2'>zuverlässig</div>
              <div className='slider-text3'>leichter</div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Header