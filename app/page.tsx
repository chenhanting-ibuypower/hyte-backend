import Image from "next/image";
import { Timeline } from "@/components/course/timeline";
import { Rank } from "@/components/course/rank";

export default function Home() {
  return (
    <div className="font-sans">
      <style>{`
        ul.flex li {
          position: relative;
        }

        ul.flex li:not(:last-child)::after {
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
        <ul className="flex text-[#beecac]">
          <li className="mx-6">DESIGN THINKING</li>
          <li className="mx-6">PRICING</li>
          <li className="mx-6">FAQ</li>
        </ul>
        <div className="">
          <button className="mx-1 font-inherit leading-4 m-0 overflow-visible uppercase appearance-none inline-block bg-[#beecac] text-white outline-none border-none text-xs md:text-sm py-2 px-6 rounded-full cursor-pointer transition-all duration-200 ease-in-out relative">
            <a
              href="https://google.com"
              aria-label="Connect Wallet"
              target="_blank"
              rel="noreferrer"
            >
              Course
            </a>
          </button>

          <button className="mx-1 font-inherit leading-4 m-0 overflow-visible uppercase appearance-none inline-block bg-[#beecac] text-white outline-none border-none text-xs md:text-sm py-2 px-6 rounded-full cursor-pointer transition-all duration-200 ease-in-out relative">
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
