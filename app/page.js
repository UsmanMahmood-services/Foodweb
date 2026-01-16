import Image from "next/image";

export default function Home() {
  return (
    <>
    
      <section className="pb-16 bg-[url('/img/bg.jpg')] bg-cover bg-center">
        
      
        <div className="relative w-full h-[70vh]">
          
        
          <Image
            src="/img/header 1.jpg"
            alt="Header"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-black/20"></div>

         
          <div className="absolute bottom-1/4 md:bottom-8 left-0 w-full text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold ">
              Fresh & Hot Burgers
            </h1>
            <p className="mt-2 text-base md:text-xl">
              Delicious taste delivered fast 🍔
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
