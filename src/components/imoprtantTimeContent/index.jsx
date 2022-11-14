import { TitleText } from '../TitleText'
import { BtnJoinHighlight, BtnPrimaryDefaultFull } from '../Button'
import dateStart from '../../image/main/date_start.png'
import dateUpload from '../../image/main/date_upload.png'
import dateWeekLine from '../../image/main/date_weekLine.png'

export default function ImoprtantTimeContent () {
  return (
        <>
            <div className='lg:h-full space-bottom relative imoprtantTimeGsap'>
                <div className='lg:hidden'>
                    <TitleText>重要時程</TitleText>
                </div>
                <ul className='viewContainer-X flex flex-col gap-20 lg:flex-row lg:justify-center lg:bg-secondaryDefault lg:mb-[95px]'>
                    <li className='imoprtantTimeContent_item'>
                        <BtnJoinHighlight>SIGN UP</BtnJoinHighlight>
                        <BtnPrimaryDefaultFull>10/13 - 11/6</BtnPrimaryDefaultFull>
                        <h5 className='text-secondaryDark text-center'>截止前可修改報名組別</h5>
                    </li>
                    <li className='imoprtantTimeContent_item'>
                        <div className='flex flex-col items-center lg:pt-[22px]'>
                            <img
                                className='w-[140px]'
                                src={dateStart}
                                alt='dateStart'
                            />
                            <h2 className='text-HighlightDefault mt-4'>START</h2>
                        </div>
                        <BtnPrimaryDefaultFull>10/31 - 11/28</BtnPrimaryDefaultFull>
                        <h5 className='text-secondaryDark text-center'>
                            10/31(一) UI、團體組開賽
                            <br />11/7(一) 前端組開賽
                        </h5>
                    </li>
                    <li className='imoprtantTimeContent_item'>
                        <div className='flex flex-col items-center lg:pt-[22px]'>
                            <img
                                className='w-[140px]'
                                src={dateUpload}
                                alt='dateUpload'
                            />
                            <h2 className='text-HighlightDefault mt-4'>UPLOAD</h2>
                        </div>
                        <BtnPrimaryDefaultFull>10/31 - 11/28</BtnPrimaryDefaultFull>
                        <h5 className='text-secondaryDark text-center'>依賽程登錄作品
                            <br /><span className='text-HighlightDefault txtBody'>額外競賽： 主題豐厚獎金等著你</span></h5>
                    </li>
                </ul>
                <div className='hidden lg:block imoprtantTimeLineGsap relative -z-20'>
                    <div className='viewContainer-X bg_dateLine mx-auto relative flex gap-20 justify-center -z-10'>
                        <img
                            className='imoprtantTimeContent_dateLine'
                            src={dateWeekLine}
                            alt='dateWeekLine'
                        />
                        <img
                            className='imoprtantTimeContent_dateLine lg:mt-[-117px]'
                            src={dateWeekLine}
                            alt='dateWeekLine'
                        />
                        <img
                            className='imoprtantTimeContent_dateLine'
                            src={dateWeekLine}
                            alt='dateWeekLine'
                        />
                    </div>
                </div>
            </div>
        </>
  )
}
