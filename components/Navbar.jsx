"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative flex items-center justify-around bg-black text-white text-lg w-full cursor-pointer p-4">
        
        
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>

        
        <a href="/" className="flex items-center font-bold text-2xl md:text-3xl">
          <img
            className="w-14 h-12 mx-2"
            src="./img/logo burger.png"
            loading="lazy"
            alt="Logo"
          /> 
          HotBites
        </a>

     
        <nav>
          <ul className="hidden md:flex gap-4">
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/contact">Order Now</a></li>
          </ul>
        </nav>

       
        <div
          className={`fixed top-0 left-0 h-full bg-black text-white w-1/2 transform transition-transform duration-300 ease-in-out z-50
            ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          <button
            onClick={() => setOpen(false)}
            className="text-2xl p-4"
          >
            ✕
          </button>
          <ul className="flex flex-col items-start gap-6 p-6 text-lg">
            <li onClick={() => setOpen(false)}><a href="/">Home</a></li>
            <li onClick={() => setOpen(false)}><a href="/menu">Menu</a></li>
            <li onClick={() => setOpen(false)}><a href="/contact">Order Now</a></li>
          </ul>
        </div>

        
        {open && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={() => setOpen(false)}
          ></div>
        )}
      </div>
    </>
  );
};

export default Navbar;
