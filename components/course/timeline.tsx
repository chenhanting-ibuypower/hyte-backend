"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useEffect, useRef } from "react";

export function Timeline({ children }: { children?: React.ReactNode }) {
  const ref = useRef(null);
  const ballRef = useRef(null);

  useEffect(() => {
    let element = ref.current;
    let svg = document?.getElementsByClassName("svg-path")[0];
    // @ts-ignore
    const length = svg?.getTotalLength();

    gsap.registerPlugin(ScrollTrigger);
    let drawLine = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top center",
        end: "bottom bottom",
        // markers: true,
        onUpdate: (self) => {
          const draw = length * self.progress;
          // console.log("draw & progress:", draw, "&", self.progress);

          // @ts-ignore
          svg.style.strokeDashoffset = length - draw;
          // @ts-ignore
          svg.style.strokeDasharray = length;
        },
        onToggle: (self) => {
          if (self.isActive) {
            // @ts-ignore
            ballRef.current.style.display = "none"
          } else {
            // @ts-ignore
            ballRef.current.style.display = "inline-block"
          }
        }
      },
    });
  }, []);

  return (
    <div className="relative">
      <div className="w-screen flex lg:justify-center">
        <div className="w-[100px] h-[2000px]">
          <span className="absolute left-[8%] sm:left-[5%] md:left-[4%] lg:left-[49%] 2xl:left-[49.3%] -top-3 flex h-7 w-7" ref={ballRef}>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c0f19f] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-7 w-7 bg-[#c0f19f]"></span>
          </span>
          <svg
            ref={ref}
            viewBox="0 0 52 2047"
            fill="none"
            style={{
              display: "inline-block",
              width: "100%",
              height: "100%",
            }}
          >
            <path
              strokeWidth="6px"
              className="svg-path"
              d="M26 0V314C12 314 1 326 1 339C1 352 11 364 26 364C41 364 51 353 51 339C51 325 28 318 26 339V636V654.5C13.5 654.5 1 664 1 679C1 694 12 703 26 703C40 703 50.5 692.5 50.5 679C49.2307 664.367 26 660 26 679V979V994.5C13.5 994.5 0.999993 1003.5 1 1019C1.00001 1034.5 12.3457 1044.15 26 1043.5C36.5163 1043 50.4852 1035.18 50.5 1019C50.5148 1002.82 28.4963 1000.64 26 1019V1327C26 1327 26 1333.7 26 1338C13 1338 1 1348.5 1 1363C1 1377.5 13.5 1388 26 1388C38.5 1388 50.9422 1381.19 51 1363C51.0578 1344.81 26 1346 26 1363C26 1380 26 1670 26 1670V1678.5C12.5 1678.5 1 1687.5 1 1703C1 1718.5 14 1727.5 26 1727.5C38 1727.5 50.5 1719 50.5 1703C50.5 1687 26 1687 26 1703C26 1719 26 2049 26 2049"
              stroke="#c0f19f"
            ></path>
          </svg>
        </div>
      </div>
      {children}
    </div>
  );
}
