"use client";
import React, { useState } from "react";
import { FloatingNav } from "../components/ui/floating-navbar";
import { IconBase } from "icons-react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
// import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export function Navbar() {
  const [toggle, settoggle] = useState(false);
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Products",
      link: "/about",
    },
    {
      name: "Resources",
      link: "/contact",
    },
    {
      name: "Pricing",
      link: "/",
    },
  ];

  return (
    <div className=" lg:flex lg:flex-row lg:justify-center  items-center top-[20px]">
      <FloatingNav
        className=" hidden md:flex mt-[20px] mx-[35px]"
        navItems={navItems}
      />

      <div className=" lg:hidden p-4 flex flex-row justify-between border-b-4 border-black rounded-2xl m-4 shadow-2xl ">
        <h1 className=" lg:hidden text-4xl">
          <span className=" text-purple-800">N</span>AV
        </h1>
        {toggle ? (
          <AiOutlineClose
            onClick={() => settoggle(!toggle)}
            className=" text-black text-4xl md:hidden block hover:cursor-pointer"
          />
        ) : (
          <GiHamburgerMenu
            onClick={() => settoggle(!toggle)}
            className="text-black text-4xl md:hidden block hover:cursor-pointer"
          />
        )}
      </div>

      {/* Responsive menu */}
      <ul
        className={` duration-500 md:hidden w-full z-50 text-white fixed bg-black top-[99px] 
                    ${toggle ? "left-[0]" : "left-[-100%]"}`}
      >
        <li className="p-5 hover:border-b-2 hover:border-white hover:cursor-pointer">
          Home
        </li>
        <li className="p-5 hover:border-b-2 hover:border-white hover:cursor-pointer">
          Company
        </li>
        <li className="p-5 hover:border-b-2 hover:border-white hover:cursor-pointer">
          Resoureces
        </li>
        <li className="p-5 hover:border-b-2 hover:border-white hover:cursor-pointer">
          About
        </li>
        <li className="p-5 hover:cursor-pointer">Contact</li>
      </ul>
    </div>
  );
}
