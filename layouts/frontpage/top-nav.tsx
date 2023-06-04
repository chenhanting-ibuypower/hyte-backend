"use client";

import Bar from "@heroicons/react/20/solid/Bars3BottomRightIcon";
import ArrowDownLeftIcon from "@heroicons/react/20/solid/ArrowDownLeftIcon";
import { SvgIcon } from "@mui/material";
import Image from "next/image";
import cn from "classnames";
import {useEffect, useState} from "react";
import { useMedia } from "react-use";

export default function TopNav() {
  const [menu, setMenu] = useState(false);
  const lgUp = useMedia("(min-width: 1024px)", false); // Initialize with fallback value

  console.log("!lgUp && menu 👉", !lgUp && menu)

  useEffect(() => {
    if(lgUp) {
      setMenu(true);
    }
  }, [lgUp])

  return (
    <nav className="container flex justify-between items-center w-85 mx-auto my-6 h-20">
      <style>{`
        @media (min-width: 1024px) {
          ul.nav-item.flex li {
            position: relative;
          }
  
          ul.nav-item.flex li:not(:last-child)::after {
            content: "";
            position: absolute;
            top: 50%;
            height: 100%;
            right: -1.5rem; 
            transform: translateY(-50%);
            border-right: 2px solid #beecac; 
            padding-right: 2rem;
            font-weight: bold;
          }
        }
        
        @media (max-width: 1024px) {
          ul.nav-item {
            display: ${!lgUp && menu ? "none" : "flex"};
            -webkit-box-pack: justify;
            justify-content: space-between;
            -webkit-box-align: center;
            align-items: center;
            list-style: none;
            position: fixed;
            inset: 5rem 0px 0px;
            width: 100vw;
            height: calc(100vh - 5rem);
            z-index: 50;
            background-color: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(2px);
            transform: translateY(0px);
            transition: all 0.3s ease 0s;
            flex-direction: column;
            -webkit-box-pack: center;
            justify-content: center;
            touch-action: none;
          }
          
           ul.nav-item.flex li {
            margin: 10px 0;
           }
        }
      `}</style>
      <h1 className="sc-gueYoa llKvDc">
        <a href="/">
          <Image
            width={100}
            height={100}
            src="/logo.jpg"
            alt="Platforms on Vercel"
          />
        </a>
      </h1>
      <span className="">
        <SvgIcon
          fontSize="medium"
          className="lg:hidden cursor-pointer"
          onClick={() => {
            setMenu((menu) => !menu);
          }}
        >
          {menu ? <Bar /> : <ArrowDownLeftIcon />}
        </SvgIcon>
      </span>
      <ul
        className={cn(
          "nav-item flex flex-col lg:flex-row text-gray-800 lg:text-[#beecac]",
          !lgUp && !menu && "overflow-hidden"
        )}
      >
        <li className="mx-6">DESIGN THINKING</li>
        <li className="mx-6">PRICING</li>
        <li className="mx-6">FAQ</li>
        <li className="lg:hidden mx-6">
          <button className="font-inherit leading-4 m-0 overflow-visible uppercase appearance-none inline-block bg-gray-800 text-white outline-none border-none text-xs md:text-sm py-2 px-6 rounded-full cursor-pointer transition-all duration-200 ease-in-out relative">
            <a
              href="https://google.com"
              aria-label="Connect Wallet"
              target="_blank"
              rel="noreferrer"
            >
              Course
            </a>
          </button>
        </li>
        <li className="lg:hidden mx-6">
          <button className="font-inherit leading-4 m-0 overflow-visible uppercase appearance-none inline-block bg-gray-800 text-white outline-none border-none text-xs md:text-sm py-2 px-6 rounded-full cursor-pointer transition-all duration-200 ease-in-out relative">
            <a
              href="https://google.com"
              aria-label="Connect Wallet"
              target="_blank"
              rel="noreferrer"
            >
              Admin
            </a>
          </button>
        </li>
      </ul>
      <div className="hidden lg:flex flex-col lg:flex-row gap-y-2 lg:gap-x-2">
        <button className="font-inherit leading-4 m-0 overflow-visible uppercase appearance-none inline-block bg-[#beecac] text-white outline-none border-none text-xs md:text-sm py-2 px-6 rounded-full cursor-pointer transition-all duration-200 ease-in-out relative">
          <a
            href="https://google.com"
            aria-label="Connect Wallet"
            target="_blank"
            rel="noreferrer"
          >
            Course
          </a>
        </button>

        <button className="font-inherit leading-4 m-0 overflow-visible uppercase appearance-none inline-block bg-[#beecac] text-white outline-none border-none text-xs md:text-sm py-2 px-6 rounded-full cursor-pointer transition-all duration-200 ease-in-out relative">
          <a
            href="https://google.com"
            aria-label="Connect Wallet"
            target="_blank"
            rel="noreferrer"
          >
            Admin
          </a>
        </button>
      </div>
    </nav>
  );
}
