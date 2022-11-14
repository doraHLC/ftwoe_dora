import { HeaderDesktop } from '../components/Header'
import QuestionContent from '../components/questionContent/index'
import ResponsiveContent from '../components/responsiveContent/index'
import ThemeContent from '../components/themeContent/index'
import ImoprtantTimeContent from '../components/imoprtantTimeContent/index'
import SatisfyContent from '../components/satisfy/index'
import WaitContent from '../components/waitContent/index'
import Sponsor from '../components/sponsor/index'
import FinishLine from '../components/finishLine/index'
import Finish from '../components/finish/index'

export default function HomeContent () {
  return (
    <>
      {/* <div className='hidden lg:block lg:pl-[20px] lg:sticky lg:top-[30px] z-30'>
        <HeaderDesktop />
      </div> */}

      <div>
        <QuestionContent />
        <ResponsiveContent />

        <ThemeContent />
        <ImoprtantTimeContent />
        <SatisfyContent />
        <WaitContent />
        <Sponsor />

        <div className='hidden lg:block'>
          <FinishLine />
        </div>
        <Finish />
      </div>
    </>
  )
}
