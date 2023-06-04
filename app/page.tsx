import Image from "next/image";
import { Timeline } from "@/components/course/timeline";
import { Rank } from "@/components/course/rank";
import TopNav from "../layouts/frontpage/top-nav";

export default function Home() {
  return (
    <div className="font-sans">
      <TopNav />
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
