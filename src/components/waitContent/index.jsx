import { TitleText } from '../TitleText'
import awardTrophy from '../../image/main/award_trophy.png'
import awardLight from '../../image/main/award_light.png'

export default function WaitContent () {
  return (
        <div className='lg:h-full space-bottom waitGsap'>
            <div className='titleTextGsap-wait'>
                <TitleText>還有比賽等著你！</TitleText>
            </div>

            <div className='viewContainer-X'>
                <div className='flex flex-col gap-6 lg:flex-row lg:w-[85%] lg:items-center lg:justify-center lg:mx-auto lg:mt-[60px]'>
                    <div className='flex justify-center items-center mx-auto relative waitAwardLight'>
                        <div className='bg_awardLight' />

                        {/* <img
                            className='w-[335px] absolute top-10'
                            src={awardLight}
                            alt='awardLight'
                        /> */}
                        <img
                            className='w-[375px] absolute'
                            src={awardTrophy}
                            alt='awardTrophy'
                        />
                    </div>
                    <ul className='flex flex-col gap-6 mb-14 md:w-2/3 md:mx-auto lg:mb-0 waitItemGsap'>
                        <li>
                            <h4 className='text-HighlightDefault mb-6 md:text-[32px]'>評審機制</h4>
                            <p className='text-primaryDefault txtBody'>初選： 將由六角學院前端、UI 評審進行第一波篩選。
                                <br />
                                決選： 由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五) 由評審進行直播公布名單！</p>
                        </li>
                        <li>
                            <h4 className='text-HighlightDefault mb-6 md:text-[32px]'>評審機制</h4>
                            <p className='text-primaryDefault txtBody'>
                                1. 初選佳作 共六十位 數位獎狀<br />
                                2. 個人企業獎 共六位 NTD <span className='text-HighlightDefault text-2xl font-GenJyuuGothic-P-Bold'>3,000</span> /位<br />
                                3. 團體企業獎 共三組 NTD <span className='text-HighlightDefault text-2xl font-GenJyuuGothic-P-Bold'>10,000</span> /組<br />
                                4. 以上皆提供完賽數位獎狀
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
  )
}
