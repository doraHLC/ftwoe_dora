import logoText from '../image/logo/logo_text.png'
import logo from '../image/logo/logo.png'
import btnUser from '../image/btn/btn_user.png'

export const HeaderPhone = () => {
  return (
    <header className='viewContainer flex justify-between mb-8 relative lg:mb-[-10px] xl:mb-[-20px]'>

      <div className='hidden opacity-0 lg:block lg:pl-[20px] lg:fixed lg:top-[30px] z-30 headerGsap'>
        <img
          className='w-[200px] h-[149px]'
          src={logo}
          alt="logo"
        />
      </div>

      <div className='w-10 h-10 lg:hidden' />
      <img
        className='w-[136px] h-[46px] cursor-pointer lg:w-[680px] lg:h-[236px] lg:mx-auto'
        src={logoText}
        alt="logoText"
      />
      <div className='bg_btnUser hover:bg-[url("./image/btn/btn_user_h.png")]'/>
      {/* <img
        className='w-10 h-10 cursor-pointer lg:w-16 lg:h-16 xl:w-20 xl:h-20 lg:fixed lg:top-[60px] lg:right-[40px] z-20'
        src={btnUser}
        alt="btnUser"
      /> */}
    </header>
  )
}

export const HeaderDesktop = () => {
  return (
    <img
      className='w-[200px] h-[149px]'
      src={logo}
      alt="logo"
    />
  )
}
