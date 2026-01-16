import React from 'react'
import Card from '@/components/Card2'

const page = () => {
  return (
    <section
      className="flex flex-wrap items-center justify-center h-100% bg-[url('/img/bg.jpg')] bg-cover bg-center">
     <div className='bg-black items-center justify-center  my-3 md:w-[90%] flex flex-wrap '>
      <Card img="/img/pastacard.png" title ="Alfredo Pasta" price="350 S ,650 L"/>
      <Card img="/img/pastacard.png" title ="Microni" price="350 S ,650 L"/>
      <Card img="/img/pastacard.png" title ="Panne Pasta" price="350 S ,650 L"/>
      <Card img="/img/pastacard.png" title ="Lazania Pasta" price="350 S ,650 L"/>
      </div>
    
   </section>
  )
}

export default page