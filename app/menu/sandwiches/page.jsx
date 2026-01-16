import React from 'react'
import Card from '@/components/Card2'

const page = () => {
  return (
    <section
      
      className="flex flex-wrap items-center justify-center h-100% bg-[url('/img/bg.jpg')] bg-cover bg-center">
     <div className='bg-black items-center justify-center  my-3 md:w-[90%] flex flex-wrap '>
      <Card img="/img/sandwichcard.jpg" title ="Chicken Sandwich" price="250"/>
      <Card img="/img/sandwichcard.jpg" title ="Club Sandwich" price="300"/>
      <Card img="/img/sandwichcard.jpg" title ="Special Steak Sandwich" price="500"/>
      <Card img="/img/sandwichcard.jpg" title ="BBQ Sandwich" price="450"/>
      <Card img="/img/sandwichcard.jpg" title ="Cheddar Melted Sandwich" price="470"/>
     </div>
    
   </section>
  )
}
export default page