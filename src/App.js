import React, { useEffect, useLayoutEffect } from 'react'
import { MenuSide } from './components/MenuSide'
import { HeaderPhone } from './components/Header'
import HomePage from './pages/HomePage'
import HomeContent from './pages/HomeContent'
import { FooterMap, FooterJoin } from './components/Footer'
import Character from './components/Character'
import finishLineL from './image/main/finishLine_l.png'
import finishLineR from './image/main/finishLine_r.png'
import ScrollCore from './utils/scrollCore'

function App () {
  useLayoutEffect(() => {
    ScrollCore()
  }, [])

  return (
    <div className='h-screen relative wrap'>
      <div className='hidden lg:h-screen lg:block lg:bg_road_door lg:fixed lg:-z-10 lg:top-0 roadDoorGsap' />
      <div className='hidden md:block md:bg_readyFrameG md:w-full md:h-screen absolute z-0 readyFrameGsap' />
      <div className='hidden lg:block lg:bg_decorate_Phone lg:w-full lg:h-screen lg:fixed lg:top-[5%] -z-20 decorateGsap' />

      <div className='bg-secondaryDefault sticky top-0 z-10 lg:relative lg:bg-transparent'>
        <HeaderPhone />
      </div>

      <div className='fixed top-0 z-20'>
        <MenuSide />
      </div>

      <HomePage />
      <HomeContent />

      <div className='fixed bottom-0 z-[2] characterRun'>
        <Character />
      </div>

      <div className='hidden lg:flex lg:h-screen lg:fixed lg:top-[70%] z-40 finishRedLineGsap opacity-0'>
        <img
          className='w-1/2 h-[150px]'
          src={finishLineL}
          alt="finishLineL"
        />
        <img
          className='w-1/2 h-[150px]'
          src={finishLineR}
          alt="finishLineR"
        />
      </div>

      <FooterMap />
      <FooterJoin />
    </div>
  )
}

export default App
