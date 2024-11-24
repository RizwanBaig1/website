import React from 'react'

function Hero() {
  return (
    <div className='w-[1920px] h-[829px] flex justify-center bg-[#043873] mx-auto py-[140px] px-[22opx]'>
      <div className='w-[656px] h-[361px] mt-24'>
        <div className='w-[656px] h-[238px]'>
          <h1 className='w-[656px] h-[154px] font-bold text-6xl text-[#FFFF]'>Get More Done with whitepace</h1>
          <p className='w-[656] h-[60px] text-[#FFFF] text-lg'>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
          <div className='w-[219px] h-[63px] bg-[#4F9CF9] rounded-lg p-5 mt-16'>
            <button className='text-[#FFFF] font-medium text-lg  w-[159px] h-[23px]'>Try Whitepace free</button>
          </div>
        </div>
      </div>
      <div className='w-[824px] h-[549px] bg-[#C4DEFD]'></div>
    </div>
  )
}

export default Hero