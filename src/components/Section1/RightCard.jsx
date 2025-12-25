import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCard = (props) => {
  return (
    <div className='h-full w-62 relative rounded-4xl shrink-0'>
      <img src={props.img} alt="Card Image" className='h-full w-full rounded-4xl object-cover' />
      <div className=' absolute top-0 left-0 h-full w-full p-9 rounded-4xl object-cover flex flex-col justify-between ' > 
        <h1 className='bg-white font-semibold text-black h-8 w-8 rounded-full flex justify-center items-center'> {props.index} </h1>
        <div> 
            <p className='leading-normal text-white font-semibold mb-8 mr-2'> {props.intro} </p>
            <div className='flex justify-between items-center mt-4' > 
                <button className='bg-blue-800 text-white font-xs px-6 py-1 rounded-full'> {props.tag} </button>
                <button className='bg-blue-800 text-white px-1 py-1 rounded-full'> <ArrowRight /> </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RightCard

