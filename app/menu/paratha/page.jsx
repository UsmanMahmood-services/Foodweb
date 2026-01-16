import React from 'react'
import Card from '@/components/Card2'

const page = () => {
  return (
    <section
      
      className="flex flex-wrap items-center justify-center h-100% bg-[url('/img/bg.jpg')] bg-cover bg-center">
     <div className='bg-black items-center justify-center  my-3 md:w-[90%] flex flex-wrap '>
      <Card img="/img/paratha.png" title ="Chicken Paratha" price="300"/>
      <Card img="/img/paratha.png" title ="Malai Paratha" price="350"/>
      <Card img="/img/paratha.png" title ="Pizza Paratha" price="400"/>
      <Card img="/img/paratha.png" title ="Zinger Paratha" price="350"/>
     </div>
    
   </section>
  )
}
export default page