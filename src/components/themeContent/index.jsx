import { TitleText } from '../TitleText'
import { BtnSecondaryDarkOutline, BtnSecondaryDark } from '../../components/Button'
import week1 from '../../image/main/week_1.png'
import week2 from '../../image/main/week_2.png'
import week3 from '../../image/main/week_3.png'

export default function ThemeContent () {
  return (
        <div className='lg:h-full space-bottom themeGsap'>
            <div className='titleTextGsap-theme'>
                <TitleText>年度最強合作，三大主題來襲</TitleText>
            </div>

            <h4 className='text-secondaryDark text-center mb-10 lg:mb-[100px] themeTxtGsap'>
                各路廠商強強聯手
                <br />
                共同設計出接地氣的網頁互動挑戰關卡
            </h4>
            <ul className='space-bottom lg:px-60'>
                <li className='themeContent_item themeItemA'>
                    <img
                        className='themeContent_img'
                        src={week1}
                        alt="week1"
                    />
                    <div className='theme_Content'>
                        <h2 className='themeContent_title'>WEEK 1</h2>
                        <h3 className='themeContent_txt'>The F2E 活動網站設計</h3>
                        <div className='themeContent_btn'>
                            <BtnSecondaryDarkOutline>Parallax Scrolling</BtnSecondaryDarkOutline>
                            <BtnSecondaryDarkOutline>#版塊設計</BtnSecondaryDarkOutline>
                            <BtnSecondaryDark>查看關卡細節</BtnSecondaryDark>
                        </div>
                    </div>
                </li>
                <li className='themeContent_item lg:flex-row-reverse themeItemB'>
                    <img
                        className='themeContent_img'
                        src={week2}
                        alt="week2"
                    />
                    <div className='theme_Content'>
                        <h2 className='themeContent_title'>WEEK 2</h2>
                        <h3 className='themeContent_txt'>今晚，我想來點點簽</h3>
                        <div className='themeContent_btn'>
                            <BtnSecondaryDarkOutline>Canvas</BtnSecondaryDarkOutline>
                            <BtnSecondaryDarkOutline>#凱鈿行動科技</BtnSecondaryDarkOutline>
                            <BtnSecondaryDark>查看關卡細節</BtnSecondaryDark>
                        </div>
                    </div>
                </li>
                <li className='themeContent_item themeItemC'>
                    <img
                        className='themeContent_img'
                        src={week3}
                        alt="week3"
                    />
                    <div className='theme_Content'>
                        <h2 className='themeContent_title'>WEEK 3</h2>
                        <h3 className='themeContent_txt'>Scrum 新手村</h3>
                        <div className='themeContent_btn'>
                            <BtnSecondaryDarkOutline>JS draggable</BtnSecondaryDarkOutline>
                            <BtnSecondaryDarkOutline>#鈦坦科技</BtnSecondaryDarkOutline>
                            <BtnSecondaryDark>查看關卡細節</BtnSecondaryDark>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
  )
}
