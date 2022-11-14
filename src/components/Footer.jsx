import mapNow from '../image/main/map_now.gif'
import btnJoinHand from '../image/btn/btn_joinHand.gif'
import btnJoin from '../image/btn/btn_join.png'

export const FooterMap = () => {
  return (
    <div className='hidden md:block md:pl-[20px] md:fixed md:bottom-5 md:left-[20px] z-20'>
      <div className='bg_map relative mt-4 hidden lg:block'>
        <img
          className='absolute top-[41px] left-[-1px] redDoGsap'
          src={mapNow}
          alt='mapNow'
        />
      </div>
    </div>

  )
}

export const FooterJoin = () => {
  return (
    <div className='hidden md:block md:pr-[20px] md:fixed md:bottom-10 md:right-[20px] z-20 lg:bottom-5 cursor-pointer'>
      <div className='flex flex-col items-center'>
        <p className='md:text-sm lg:text-2xl txtBody-Highlight text-primaryDefault'>JOIN</p>
        <img
          className='md:w-[22px] lg:w-[57px] '
          src={btnJoinHand}
          alt='btnJoinHand'
        />
        <img
          className='md:w-[40px] lg:w-[103px]'
          src={btnJoin}
          alt='btnJoin'
        />
      </div>
    </div>
  )
}
