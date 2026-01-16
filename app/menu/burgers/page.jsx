import React from 'react'
import Card from '@/components/Card2'

const page = () => {
  return (
    <section
      className="flex flex-wrap items-center justify-center h-100% bg-[url('/img/bg.jpg')] bg-cover bg-center">
     <div className='bg-black items-center justify-center  my-3 md:w-[90%] flex flex-wrap '>
      <Card img="/img/burgercard.png" title ="Shami Burger" price="150"/>
      <Card img="/img/burgercard.png" title ="Double Anda Burger" price="200"/>
      <Card img="/img/burgercard.png" title ="Patty Burger" price="250"/>
      <Card img="/img/burgercard.png" title ="Botty Burger" price="300"/>
      <Card img="/img/burgercard.png" title ="Zinger Burger" price="300"/>
      <Card img="/img/burgercard.png" title ="Special Zinger Burger" price="350"/>
      <Card img="/img/burgercard.png" title ="Hot bite Special Burger" price="400"/>
      <Card img="/img/burgercard.png" title ="Pizza Burger" price="400"/>
      <Card img="/img/burgercard.png" title ="Special Steak Burger" price="600"/>
      <Card img="/img/burgercard.png" title ="BBQ Steak Burger" price="450"/>
      <Card img="/img/burgercard.png" title ="Mexican Burger" price="450"/>
      <Card img="/img/burgercard.png" title ="7 Saus Grill Burger" price="550"/>
     
 
      </div>
    
   </section>
  )
}

export default page