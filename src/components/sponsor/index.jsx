import React, { useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt'
import { TitleText } from '../TitleText'
import { BtnSecondaryDarkOutline } from '../../components/Button'
import BlockstudioN from '../../image/main/logo_blockstudioN.png'
import KdanmobileN from '../../image/main/logo_kdanmobileN.png'
import TitansoftN from '../../image/main/logo_titansoftN.png'

export default function Sponsor () {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll('.sponsorImg'))
  }, [])

  return (
        <div className='lg:h-full space-bottom sponsorGsap'>
            <div className='titleTextGsap-sponsor'>
                <TitleText>贊助單位</TitleText>
            </div>

            <ul className='flex flex-col items-center gap-10 mt-14 pb-14 lg:flex-row lg:gap-[3%] lg:justify-center xl:gap-[5%]'>
                <li className='blockstudio'>
                    <a className='sponsor_item' target='blank' href='https://blockstudio.tw/'>
                        <img
                            className='w-[252x] h-[252px] lg:w-[315px] lg:h-[315px] sponsorImg'
                            src={BlockstudioN}
                            alt='BlockstudioN'
                        />
                        <BtnSecondaryDarkOutline>#版塊設計</BtnSecondaryDarkOutline>
                    </a>
                </li>
                <li className='titansoft'>
                    <a className='sponsor_item' target='blank' href='https://titansoft.com/tw'>
                        <img
                            className='w-[252x] h-[252px] lg:w-[315px] lg:h-[315px] sponsorImg'
                            src={TitansoftN}
                            alt='TitansoftN'
                        />
                        <BtnSecondaryDarkOutline>#鈦坦科技</BtnSecondaryDarkOutline>
                    </a>
                </li>
                <li className='kdanmobile'>
                    <a className='sponsor_item' target='blank' href='https://www.kdanmobile.com/zh-tw'>
                        <img
                            className='w-[252x] h-[252px] lg:w-[315px] lg:h-[315px] sponsorImg'
                            src={KdanmobileN}
                            alt='KdanmobileN'
                        />
                        <BtnSecondaryDarkOutline>#凱鈿科技</BtnSecondaryDarkOutline>
                    </a>
                </li>
            </ul>

        </div>
  )
}
