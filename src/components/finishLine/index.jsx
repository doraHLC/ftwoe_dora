import finish from '../../image/main/finish_1.png'
import finishLineL from '../../image/main/finishLine_l.png'
import finishLineR from '../../image/main/finishLine_r.png'

export default function FinishLine () {
  return (
    <div className='viewContainer-X lg:h-full space-bottom opacity-0 finishLineGsap'>
      <img
        className='w-auto h-screen mx-auto'
        src={finish}
        alt="finish"
      />
      {/* <div className='flex relative z-20 finishRedLineGsap'>
        <img
          className='w-1/2 absolute left-0 top-[-250px] z-40'
          src={finishLineL}
          alt="finishLineL"
        />

        <img
          className='w-1/2 absolute right-0 top-[-250px] z-40'
          src={finishLineR}
          alt="finishLineR"
        />
      </div> */}
    </div>
  )
}
