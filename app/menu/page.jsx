import React from 'react'
import Card from '@/components/Card'

const page = () => {
  return (
    <section
      id="menu"
      className="flex flex-wrap items-center justify-center h-100% bg-[url('/img/bg.jpg')] bg-cover bg-center">
     <div className='bg-black items-center justify-center  my-3 md:w-[90%] flex flex-wrap '>
      <Card item="/menu/burgers" img="/img/burgercard.jpg" title ="Burgers" description="Juicy patties with cheesy, grilled perfection"/>
      <Card item="/menu/pizzas" img="/img/pizzacard.jpg" title ="Pizza" description="Crispy crust topped with rich, melted cheese"/>
      <Card item="/menu/shawarma" img="/img/shawarmacard.jpg" title ="Shawarma" description="Tender, spicy chicken wrapped in soft bread"/>
      <Card item="/menu/pastas" img="/img/pastacard.jpg" title ="Pasta" description="Creamy sauces blended with rich taste"/>
      <Card item="/menu/sandwiches" img="/img/sandwichcard.jpg" title ="Sandwiches" description="Fresh fillings layered in soft, tasty bread"/>
      <Card item="/menu/paratha" img="/img/paratha.jpg" title ="Roll Paratha’s" description="Flaky paratha rolled with bold desi flavors"/>
      <Card item="/menu/wraps" img="/img/wrap.jpg" title ="Grill Wrap’s" description="Smoky grilled wraps, fresh and filling"/>
      <Card item="/menu/chinese"  img="/img/Chinesecard.jpg" title ="Chinese" description="Spicy, wok-tossed dishes full of flavor"/>
      </div>
    
   </section>
  )
}

export default page
