import Image from 'next/image'
import React from 'react'
import ProgressCircle from '../common/ProgressCircle'

export const HabitCard = () => {
  return (
    <div className={`bg-purple rounded-xl p-3 bg-60% bg-drink-water bg-right bg-no-repeat w-full`}>
        <ProgressCircle value={80} max={100} size={55} />
        <p className='text-white font-light mt-2'>A glass of water after wake up</p>
    </div>
  )
}
