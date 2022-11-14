import logo from '../../image/logo/logo.png'
import { BtnJoinHighlight } from '../../components/Button'

export default function Finish () {
  return (
        <div className='viewContainer-X lg:h-full space-bottom flex flex-col items-center gap-10 lg:gap-7 finishGsap lg:pb-[300px]'>
            <img
                className='w-[226px] h-[169px] lg:w-[520px] lg:h-[387px]'
                src={logo}
                alt="logo"
            />
            <a className='pb-20 lg:pb-0' target='blank' href='https://2022.thef2e.com/'>
                <BtnJoinHighlight>立即報名</BtnJoinHighlight>
            </a>
        </div>
  )
}
