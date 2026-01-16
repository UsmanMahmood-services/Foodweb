import React from 'react'
import Card from '@/components/Card3'

const page = () => {
  return (
    <section
      
      className="flex flex-wrap items-center justify-center h-100% bg-[url('/img/bg.jpg')] bg-cover bg-center">
     <div className='bg-black items-center justify-center  my-3 md:w-[90%] flex flex-wrap '>
      <Card img="/img/pizzacard.jpg" title ="Hot bites Special" priceS="500" priceM="900" priceL="1300"/>
      <Card img="/img/pizzacard.jpg" title ="Lazania Pizza" priceS="500" priceM="900" priceL="1300"/>
      <Card img="/img/pizzacard.jpg" title ="Chicken Cheese Stuffer" priceS="600" priceM="1150" priceL="1700"/>
      <Card img="/img/pizzacard.jpg" title ="AL Fredo Pizza" priceS="450" priceM="850" priceL="1200"/>
      <Card img="/img/pizzacard.jpg" title ="Chicken Fajita" priceS="400" priceM="750" priceL="1100"/>
      <Card img="/img/pizzacard.jpg" title ="Chicken Tikka" priceS="400" priceM="750" priceL="1100"/>
      <Card img="/img/pizzacard.jpg" title ="Chicken Supreme" priceS="400" priceM="750" priceL="1100"/>
      <Card img="/img/pizzacard.jpg" title ="Saucy Stuffy Pizza" priceS="450" priceM="850" priceL="1200"/>
      <Card img="/img/pizzacard.jpg" title ="Fajita Legend" priceS="500" priceM="900" priceL="1200"/>
      <Card img="/img/pizzacard.jpg" title ="Supreme Legend" priceS="500" priceM="900" priceL="1200"/>
      <Card img="/img/pizzacard.jpg" title ="Crown Crusted" priceS="500" priceM="900" priceL="1300"/>
      <Card img="/img/pizzacard.jpg" title ="BBQ Flame" priceS="450" priceM="850" priceL="1300"/>
      <Card img="/img/pizzacard.jpg" title ="Malai boti Pizza" priceS="500" priceM="900" priceL="1300"/>
      <Card img="/img/pizzacard.jpg" title ="Punjabi Pizza" priceS="450" priceM="800" priceL="1200"/>
      <Card img="/img/pizzacard.jpg" title ="Kabab Stuffer" priceS="600" priceM="1150" priceL="1700"/>
     </div>
    
   </section>
  )
}
export default page