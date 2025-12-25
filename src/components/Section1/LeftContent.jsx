import React from 'react'
import { MoveUpRight } from 'lucide-react'

function LeftContent() {
    return (
        <div className='h-full flex flex-col justify-between w-1/4'>
            <div>
                <h3 className='font-bold text-4xl pt-5 pl-5'> Prospective <br /> <span> Camera </span> <br /> Segmentation </h3>
                <p className='pt-7 pl-5 text-lg items-center'> We map photographers by needs - from studio pros financing glass, to travel vloggers upgrading mirrorless kits, to hobbyists seeking value gear. </p>
            </div>

            <div className='text-9xl font-bold mb-6 ml-5'> <MoveUpRight /> </div>
        </div>
    )
}

export default LeftContent
