import React, { useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt'
import { TitleText } from '../TitleText'
import questionAg from '../../image/main/question_1_m_g.gif'
import questionBg from '../../image/main/question_2_g.gif'
import questionCg from '../../image/main/question_3_m_g.gif'
import questionDg from '../../image/main/question_1_g.gif'
import questionEg from '../../image/main/question_3_g.gif'

export default function QuestionContent () {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll('.questionContent_img'))
  }, [])
  return (
    <div className='lg:h-full questionGsap'>
      <div className='titleTextGsap-question'>
        <TitleText>你是否也有以下困擾？</TitleText>
      </div>

      <ul className='viewContainer-X space-bottom lg:flex lg:justify-center lg:items-center lg:gap-2 lg:mt-10'>
        <li className='questionContent_item'>
          <h4 className='questionContent_title'>羨慕別人的酷酷網頁動畫？</h4>
          <img
            className='questionContent_img lg:hidden'
            src={questionAg}
            alt='questionAg'
          />
          <img
            className='questionContent_img hidden lg:block'
            src={questionDg}
            alt='questionDg'
          />
        </li>
        <li className='questionContent_item'>
          <h4 className='questionContent_title'>滿足不了同事的許願？</h4>
          <img
            className='questionContent_img'
            src={questionBg}
            alt='questionBg'
          />
        </li>
        <li className='questionContent_item'>
          <h4 className='questionContent_title'>動畫技能樹太雜無從下手？</h4>
          <img
            className='questionContent_img lg:hidden'
            src={questionCg}
            alt='questionCg'
          />
          <img
            className='questionContent_img hidden lg:block'
            src={questionEg}
            alt='questionEg'
          />
        </li>
      </ul>
    </div>
  )
}
