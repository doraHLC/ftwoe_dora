import React from 'react'
import characterF2e from '../image/character/character_f2e.gif'
import characterTeam from '../image/character/character_team.gif'
import characterUi from '../image/character/character_ui.gif'

export default function Character () {
  return (
        <div className='relative w-screen'>
            <div className='bg_road absolute bottom-0' />

            <div className='bg_decorateH absolute left-0 bottom-0 scale-x-[-1] opacity-0' />
            <div className='bg_decorateH absolute right-0 bottom-0 opacity-0' />

            <div className='bg_decorateThree absolute left-0 top-0 opacity-0' />
            <div className='bg_decorateS absolute right-0 top-0 opacity-0' />

            {/* <div className='bg_character_dog' />
            <div className='bg_character_cat' />
            <div className='bg_character_pig' /> */}

            <div className='viewContainer-X flex justify-center items-center relative z-[1]'>
                <img
                    className='w-[112px] h-[192px] md:w-[168px] md:h-[288px] xl:w-[351px] xl:h-[601px]'
                    src={characterF2e}
                    alt="characterF2e"
                />
                <img
                    className='w-[118px] h-[192px] md:w-[177px] md:h-[288px] xl:w-[370px] xl:h-[601px]'
                    src={characterUi}
                    alt="characterUi"
                />
                <img
                    className='w-[113px] h-[169px] md:w-[170px] md:h-[254px] xl:w-[351px] xl:h-[527px]'
                    src={characterTeam}
                    alt="characterTeam"
                />
            </div>
        </div>
  )
}
