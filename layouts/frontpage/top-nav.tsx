"use client";

import Bar from "@heroicons/react/20/solid/Bars3BottomRightIcon";
import ArrowDownLeftIcon from "@heroicons/react/20/solid/ArrowDownLeftIcon";
import { SvgIcon } from "@mui/material";
import Image from "next/image";
import cn from "classnames";
import { useEffect, useState } from "react";
import { useMedia } from "react-use";
import { getSession, signOut } from "next-auth/react";

export default function TopNav() {
  const [menu, setMenu] = useState(false);
  const lgUp = useMedia("(min-width: 1024px)", false); // Initialize with fallback value
  const [user, setUser] = useState({
    user: undefined,
  });

  useEffect(() => {
    if (lgUp) {
      setMenu(false);
    }
  }, [lgUp]);

  useEffect(() => {
    getSession()
      .then((_user) => {
        // @ts-ignore
        setUser(_user);
      })
      .catch((err) => {
        console.error(err);
        // @ts-ignore
        setUser({});
      });
  }, []);

  // @ts-ignore
  const role = user?.user?.role;
  const isAdmin = role === "ADMIN";

  return (
    <nav className="mx-6 flex justify-between items-center w-85 my-6 h-20">
      <style jsx>{`
        @media (min-width: 1024px) {
          ul.nav-item.flex li {
            position: relative;
          }

          ul.nav-item.flex
            li:not(:last-child):not(:nth-last-child(2)):not(.lg\\\:hidden)::after {
            content: "";
            position: absolute;
            top: 50%;
            height: 100%;
            right: -1.5rem;
            transform: translateY(-50%);
            border-right: 1px solid #739c5b;
            padding-right: 2rem;
            font-weight: normal;
          }
        }

        @media (max-width: 1024px) {
          ul.nav-item {
            display: ${!lgUp && menu ? "flex" : "none"};
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
      <span className="lg:hidden">
        <SvgIcon
          fontSize="medium"
          className="lg:hidden cursor-pointer text-[#A8D978]"
          onClick={() => {
            setMenu((menu) => !menu);
          }}
        >
          {menu ? <ArrowDownLeftIcon /> : <Bar />}
        </SvgIcon>
      </span>
      <ul
        className={cn(
          "nav-item text-gray-800 lg:text-[#739c5b]", (menu || lgUp) ? "flex flex-col lg:flex-row" : "hidden"
        )}
      >
        <li className="mx-6">DESIGN THINKING</li>
        <li className="mx-6">CODING</li>
        <li className="mx-6">ART</li>
        <li className="mx-6">AI</li>
        <li className="mx-6">Interdisciplinary</li>
        {role ? (
          <li className="lg:hidden mx-6">
            <button
              onClick={() => signOut()}
              className="min-w-[200px] font-inherit leading-4 m-0 overflow-visible uppercase appearance-none inline-block bg-[#A8D978] text-white outline-none border-none text-xs md:text-sm py-2 px-6 rounded-full cursor-pointer transition-all duration-200 ease-in-out relative"
            >
              Sign out
            </button>
          </li>
        ) : (
          <li className="lg:hidden mx-6">
            <button className="min-w-[200px] font-inherit leading-4 m-0 overflow-visible uppercase appearance-none inline-block bg-[#A8D978] text-white outline-none border-none text-xs md:text-sm py-2 px-6 rounded-full cursor-pointer transition-all duration-200 ease-in-out relative">
              <a href="/login" aria-label="Admin" rel="noreferrer">
                Sign in
              </a>
            </button>
          </li>
        )}
        {isAdmin && (
          <li className="lg:hidden mx-6">
            <button className="min-w-[200px] font-inherit leading-4 m-0 overflow-visible uppercase appearance-none inline-block bg-[#A8D978] text-white outline-none border-none text-xs md:text-sm py-2 px-6 rounded-full cursor-pointer transition-all duration-200 ease-in-out relative">
              <a
                href="/admin/customers"
                aria-label="Admin"
                target="_blank"
                rel="noreferrer"
              >
                Admin
              </a>
            </button>
          </li>
        )}
      </ul>
      <div className="hidden lg:flex flex-col lg:flex-row gap-y-2 lg:gap-x-2">
        {role ? (
          <button
            onClick={() => signOut()}
            className="font-inherit leading-4 m-0 overflow-visible uppercase appearance-none inline-block bg-[#A8D978] text-white outline-none border-none text-xs md:text-sm py-2 px-6 rounded-full cursor-pointer transition-all duration-200 ease-in-out relative"
          >
            Sign out
          </button>
        ) : (
          <button className="font-inherit leading-4 m-0 overflow-visible uppercase appearance-none inline-block bg-[#A8D978] text-white outline-none border-none text-xs md:text-sm py-2 px-6 rounded-full cursor-pointer transition-all duration-200 ease-in-out relative">
            <a href="/login" aria-label="Admin" rel="noreferrer">
              Sign in
            </a>
          </button>
        )}

        {isAdmin && (
          <button className="font-inherit leading-4 m-0 overflow-visible uppercase appearance-none inline-block bg-[#A8D978] text-white outline-none border-none text-xs md:text-sm py-2 px-6 rounded-full cursor-pointer transition-all duration-200 ease-in-out relative">
            <a
              href="/admin"
              aria-label="Admin"
              target="_blank"
              rel="noreferrer"
            >
              Admin
            </a>
          </button>
        )}
      </div>
    </nav>
  );
}
