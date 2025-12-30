import React from 'react'

const contact = () => {
  return ( 

    <section
      id="order"
      className="flex flex-wrap items-center justify-center text-center h-[80vh] bg-[url('/img/bg.jpg')] bg-cover bg-center"
    >
      <div className="flex flex-wrap items-center justify-center text-center h-[65vh] w-full bg-black text-white">
        <div className="items-center justify-center flex flex-col md:flex-row  gap-6 h-[70vh]  ">
          
     
          <img
            src="/img/deliverimg.jpg"
            alt="Delivery"
            width={200}
            height={200}
            className="w-[30%]  md:w-[18%] h-auto min-w-1"
            loading="lazy"
          />

         
          <div className="border-none text-sm md:text-xl md:w-[35%]    ">
            <p>📍 Main Wagha Border Road, Santpura, Lahore</p>
            <p>📞 0328-9825532 | 0325-4039453</p>
            <p>🕒 3:00 PM – 2:00 AM</p>
            <p>🛵💨 Home Delivery Available</p>
            <p className="text-yellow-400">Owner : M. Abdullah Akbar</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default contact
