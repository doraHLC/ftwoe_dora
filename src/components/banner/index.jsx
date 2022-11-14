import logo from '../../image/logo/logo.png'
import { BtnPrimaryDefault } from '../Button'

export default function Banner () {
  return (
        <div className='h-[calc(100vh-90px)] relative lg:h-[calc(100vh-250px)] bannerGsap'>
            <img
                className='w-[253px] h-[189px] mx-auto mb-3 lg:hidden'
                src={logo}
                alt="logo"
            />
            <div className='bg_readyFrameG relative md:bg-none'>
                <p className='absolute font-GenJyuuGothic-P-Bold text-sm text-HighlightDefault right-[40px] bottom-[47px] md:hidden'>
                    READY?
                </p>
                <div className='flex flex-col items-center mb-4 gap-[20px]'>
                    <h1 className='viewContainer-X btn-HighlightDefault text-white md:text-[20px]'>互動式網頁設計</h1>
                    <ul className='w-full bg_decorate_Phone lg:flex lg:gap-24 lg:justify-center lg:bg-none'>
                        <li className='banner_item'>
                            <h4 className='text-primaryDefault md:text-[20px] lg:text-2xl mb-2'>前端工程師</h4>
                            <BtnPrimaryDefault>920</BtnPrimaryDefault>
                        </li>
                        <li className='banner_item'>
                            <h4 className='text-primaryDefault md:text-[20px] lg:text-2xl mb-2'>UI設計師</h4>
                            <BtnPrimaryDefault>110</BtnPrimaryDefault>
                        </li>
                        <li className='banner_item'>
                            <h4 className='text-primaryDefault md:text-[20px] lg:text-2xl mb-2'>團體組</h4>
                            <BtnPrimaryDefault>41</BtnPrimaryDefault>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
  )
}
