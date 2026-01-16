import React from 'react'
import Image from 'next/image'
const Card = (props) => {
  return ( <>
  
    <div className='border-2 bg-gray-800 border-amber-400 h-[38vh] m-2 my-4 px-2  w-[45vw] md:w-[22vw] md:h-[35vh] md:m-8 md:my-2  transition-all duration-300
                hover:scale-105
                hover:shadow-[0_0_25px_rgba(255,0,0,0.4)] ease-out'>
        <Image
        src={props.img}
        alt={props.title}
    width={90}
    height={90}
       loading='lazy'
        className="rounded-lg my-4"
      />
      <h2 className='text-lg md:text-lg text-amber-400 '>{props.title}</h2>
      <div className='text-lg font-bold md:lg my-2 md:my-4 text-white'>Rs {props.price}</div>
      
    </div>
  </> )
}

export default Card
