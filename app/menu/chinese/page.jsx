import React from 'react'
import Card from '@/components/Card2'

const page = () => {
  return (
    <section
      className="flex flex-wrap items-center justify-center h-100% bg-[url('/img/bg.jpg')] bg-cover bg-center">
     <div className='bg-black items-center justify-center  my-3 md:w-[90%] flex flex-wrap '>
      <Card img="/img/Chinesecard.png" title ="Chicken Manchurian" price="400 S ,700 L"/>
      <Card img="/img/Chinesecard.png" title ="Chicken Shashlik" price="400 S ,700 L"/>
      <Card img="/img/Chinesecard.png" title ="Chicken Black Pepper" price="400 S ,700 L"/>
      <Card img="/img/Chinesecard.png" title ="Chicken Chilli Dry" price="400 S ,700 L"/>
      <Card img="/img/Chinesecard.png" title ="Chicken Chowmian" price="400 S ,700 L"/>
      </div>
    
   </section>
  )
}

export default page