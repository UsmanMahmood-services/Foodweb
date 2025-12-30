import React from 'react'

const Card = (props) => {
  return (
    <div className='border-2  border-amber-400 h-[38vh] m-2 my-4 px-2  w-[45vw] md:w-[22vw] md:h-[35vh] md:m-8 md:my-2  transition-all duration-300
                hover:scale-105
                hover:shadow-[0_0_25px_rgba(255,0,0,0.4)] ease-out'>
         <img
        src={props.img}
        alt={props.title}
        width={90}
       rel="preload"
        className="rounded-lg my-4"
      />
      <h2 className='text-lg md:text-2xl text-amber-400 '>{props.title}</h2>
      <p className='text-sm md:lg text-white'>{props.description}</p>
    </div>
  )
}

export default Card
