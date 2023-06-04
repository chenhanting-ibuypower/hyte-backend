import Image from "next/image";
import { Timeline } from "@/components/course/timeline";
import { Rank } from "@/components/course/rank";
import cn from "classnames";

export default function Home() {
  return (
    <div className="font-sans">
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
            display: flex;
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
      <nav className="container flex justify-between items-center w-85 mx-auto my-6 h-20">
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
        <span className="">&nbsp;</span>
        <ul className={cn("nav-item flex flex-col lg:flex-row text-gray-800 lg:text-[#beecac]")}>
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
      <div className="flex bg-black">
        <div className="w-screen h-screen lg:h-[70vw] relative flex flex-col justify-center items-center">
          <Image
            fill
            src="/cover.jpg"
            alt="Homepage Image"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <div className="w-full">
        <h1 className="mx-auto pb-1 w-fit text-4xl mt-6 mb-14 border-b-2 border-[#a8d978] text-[#a8d978]">
          My Course
        </h1>
      </div>
      <Timeline>
        <Rank />
      </Timeline>
    </div>
  );
}
