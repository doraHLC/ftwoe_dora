import btnJoinHand from '../image/btn/btn_joinHand.gif'
import btnJoin from '../image/btn/btn_join.png'

export const BtnPrimaryDefault = (props) => {
  return (
    <button className='btn-primaryDefault cursor-pointer'>
      <svg className='w-[22px] h-[22px]'
        width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_8_71)">
          <path d="M15 18.3333C18.6819 18.3333 21.6667 15.3486 21.6667 11.6667C21.6667 7.98477 18.6819 5 15 5C11.3181 5 8.33337 7.98477 8.33337 11.6667C8.33337 15.3486 11.3181 18.3333 15 18.3333Z" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 35V31.6667C5 29.8986 5.70238 28.2029 6.95262 26.9526C8.20286 25.7024 9.89856 25 11.6667 25H18.3333C20.1014 25 21.7971 25.7024 23.0474 26.9526C24.2976 28.2029 25 29.8986 25 31.6667V35" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28.2556 17.4999C29.0353 17.0659 29.7251 16.4769 30.2794 15.7628C31.1871 14.5934 31.6798 13.1552 31.6798 11.675C31.6798 10.1947 31.1871 8.75649 30.2794 7.58714C29.552 6.64996 28.5911 5.92819 27.5 5.4895" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M35 35V31.6667C34.9915 30.1953 34.4965 28.768 33.5921 27.6073C32.6877 26.4467 31.4247 25.6178 30 25.25" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_8_71">
            <rect width="40" height="40" fill="currentcolor" />
          </clipPath>
        </defs>
      </svg>
      <span className="text-[20px] lg:text-2xl">{props.children}</span>
    </button>
  )
}

export const BtnPrimaryDefaultFull = (props) => {
  return (
    <button className='btn-primaryDefaultFull cursor-pointer'>
      {props.children}
    </button>
  )
}

export const BtnJoin = (props) => {
  return (
    <div className='flex flex-col items-center cursor-pointer'>
      <img
        className='w-[57px]'
        src={btnJoinHand}
        alt='btnJoinHand'
      />
      <img
        className='w-[103px]'
        src={btnJoin}
        alt='btnJoin'
      />
      <h4 className='text-primaryDefault mt-4'>{props.children}</h4>
    </div>
  )
}

export const BtnJoinHighlight = (props) => {
  return (
    <div className='flex flex-col items-center cursor-pointer'>
      <img
        className='w-[57px]'
        src={btnJoinHand}
        alt='btnJoinHand'
      />
      <img
        className='w-[103px]'
        src={btnJoin}
        alt='btnJoin'
      />
      <h2 className='text-HighlightDefault mt-4'>{props.children}</h2>
    </div>
  )
}

export const BtnSecondaryDarkOutline = (props) => {
  return (
    <button className='btn-SecondaryDark-Outline cursor-pointer'>
      {props.children}
    </button>
  )
}

export const BtnSecondaryDark = (props) => {
  return (
    <button className='btn-SecondaryDark mt-2 cursor-pointer'>
      {props.children}
    </button>
  )
}
