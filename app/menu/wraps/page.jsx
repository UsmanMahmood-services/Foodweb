import React from 'react'
import Card from '@/components/Card2'

const page = () => {
  return (
    <section
      
      className="flex flex-wrap items-center justify-center h-100% bg-[url('/img/bg.jpg')] bg-cover bg-center">
     <div className='bg-black items-center justify-center  my-3 md:w-[90%] flex flex-wrap '>
      <Card img="/img/wrap.jpg" title ="Hot bite Special Wrap" price="450"/>
      <Card img="/img/wrap.jpg" title ="Grill Juicy Wrap" price="400"/>
      <Card img="/img/wrap.jpg" title ="Crispy Tender Wrap" price="400"/>
      <Card img="/img/wrap.jpg" title ="Grill Shawarma Wrap" price="300"/>
      <Card img="/img/wrap.jpg" title ="Grill Paratha Wrap" price="400"/>
     </div>
    
   </section>
  )
}
export default page