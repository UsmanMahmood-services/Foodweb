import React from 'react'
import Card from '@/components/Card2'

const page = () => {
  return (
    <section
      
      className="flex flex-wrap items-center justify-center h-100% bg-[url('/img/bg.jpg')] bg-cover bg-center">
     <div className='bg-black items-center justify-center  my-3 md:w-[90%] flex flex-wrap '>
      <Card img="/img/shawarmacard.jpg" title ="Chicken Shawarma" price="200"/>
      <Card img="/img/shawarmacard.jpg" title ="Special Shawarma" price="250"/>
      <Card img="/img/shawarmacard.jpg" title ="Malai Shawarma" price="250"/>
      <Card img="/img/shawarmacard.jpg" title ="Hot bite Special Shawarma" price="300"/>
      <Card img="/img/shawarmacard.jpg" title ="Zinger Shawarma" price="300"/>
     </div>
    
   </section>
  )
}
export default page