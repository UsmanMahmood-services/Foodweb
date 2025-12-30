import React from 'react'
import Card from '@/components/Card'

const page = () => {
  return (
    <section
      id="menu"
      className="flex flex-wrap items-center justify-center h-100% bg-[url('/img/bg.jpg')] bg-cover bg-center">
     <div className='bg-black items-center justify-center  my-3 md:w-[90%] flex flex-wrap '>
      <Card img="/img/burgercard.png" title ="Burgers" description="Juicy patties with cheesy, grilled perfection"/>
      <Card img="/img/pizzacard.png" title ="Pizza" description="Crispy crust topped with rich, melted cheese"/>
      <Card img="/img/shawarmacard.png" title ="Shawarma" description="Tender, spicy chicken wrapped in soft bread"/>
      <Card img="/img/pastacard.png" title ="Pasta" description="Creamy sauces blended with rich taste"/>
      <Card img="/img/sandwichcard.png" title ="Sandwiches" description="Fresh fillings layered in soft, tasty bread"/>
      <Card img="/img/paratha.png" title ="Roll Paratha" description="Flaky paratha rolled with bold desi flavors"/>
      <Card img="/img/wrap.png" title ="Grill Wraps" description="Smoky grilled wraps, fresh and filling"/>
      <Card img="/img/Chinesecard.png" title ="Chinese" description="Spicy, wok-tossed dishes full of flavor"/>
      </div>
    
   </section>
  )
}

export default page
