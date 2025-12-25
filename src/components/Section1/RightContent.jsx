import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props);

  return (
    <div id='right' className='h-full p-6 w-3/4 gap-6 bg-white flex flex-nowrap overflow-x-auto' >
      {props.users.map(function(elem, index){
        return <RightCard key={index} index={index + 1} img={elem.img} tag={elem.tag} intro={elem.intro} />
      })}  
    </div>
  )
}

export default RightContent
