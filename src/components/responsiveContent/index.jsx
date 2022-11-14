import { TitleText } from '../TitleText'
import { BtnJoin } from '../../components/Button'
import characterF2eP from '../../image/character/character_f2e.png'
import characterTeamP from '../../image/character/character_team.png'
import characterUiP from '../../image/character/character_ui.png'

export default function ResponsiveContent () {
  return (
    <div className='lg:h-full responsiveGsap'>
      <div className='titleTextGsap-responsive'>
      <TitleText>本屆主題：互動式網頁設計？</TitleText>
      </div>

      <h4 className='text-secondaryDark text-center mb-10 responsiveTxtGsap'>以下兩個角色進行攜手合作</h4>

      <ul className='flex flex-col items-center space-bottom lg:flex-row lg:gap-[8%] lg:justify-center'>
        <li className='responsiveContent_item'>
          <img
            className='w-[157.5px] h-[270px] md:w-[228px] md:h-[390px] lg:hidden'
            src={characterF2eP}
            alt="characterF2eP"
          />
          <BtnJoin>前端工程師</BtnJoin>
        </li>
        <li className='responsiveContent_item flex-row-reverse'>
          <img
            className='w-[157px] h-[255px] md:w-[228px] md:h-[371px] lg:hidden'
            src={characterUiP}
            alt="characterUiP"
          />
          <BtnJoin>UI設計師</BtnJoin>
        </li>
        <li className='responsiveContent_item'>
          <img
            className='w-[158px] h-[238px] md:w-[229px] md:h-[344px] lg:hidden'
            src={characterTeamP}
            alt="characterTeamP"
          />
          <BtnJoin>團體組(UI+前端)</BtnJoin>
        </li>
      </ul>
    </div>
  )
}
