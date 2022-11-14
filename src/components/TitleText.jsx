export const TitleText = (props) => {
  return (
    <div className='relative flex items-center justify-center mb-10 lg:mb-0 mt-[30px]'>
      <div className='bg_talking_C lg:bg_talking' />
      <p className='absolute text-2xl lg:text-[60px] font-GenJyuuGothic-P-Bold text-primaryDefault lg:top-10'>{props.children}</p>
    </div>
  )
}
