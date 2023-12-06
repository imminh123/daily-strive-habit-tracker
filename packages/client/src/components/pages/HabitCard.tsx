import React from 'react'
import ProgressCircle from '../common/ProgressCircle'

export const HabitCard = (props: {data: any}) => {
  return (
    <div className={`bg-purple rounded-xl p-3 bg-60% bg-drink-water bg-right bg-no-repeat w-full`}>
        <ProgressCircle value={props.data?.completed ? 100 : 0} max={100} size={55} />
        <p className='text-white font-light mt-2'>{props.data?.name}</p>
    </div>
  )
}
