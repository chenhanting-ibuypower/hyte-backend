import { Timeline } from "@/components/course/timeline";
import { Ranks } from "@/components/course/ranks";

export default function Page() {
  return (
    <div className="">
      <div className="h-screen"></div>
      <div className="w-full">
        <h1 className="mx-auto pb-1 w-fit text-4xl mt-6 mb-14 border-b-2 border-[#a8d978] text-[#a8d978]">
          My Course
        </h1>
      </div>
      <Timeline>
        <Ranks />
      </Timeline>
    </div>
  );
}
