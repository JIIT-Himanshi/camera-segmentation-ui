import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='flex py-10 px-12 bg-white h-[90vh] gap-10' >
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content