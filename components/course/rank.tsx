"use client";

import { useMedia } from "react-use";

export function Rank() {
  const ranks = Array.from({ length: 5 }, (_, index) => `RANK ${index + 1}`);
  const lgUp = useMedia("(min-width: 1024px)", false); // Initialize with fallback value

  return (
    <div className="absolute top-0 left-[25%] sm:left-[15%] md:left-[10%] lg:left-[55%] w-full mt-8">
      {ranks.map((rank, i) => (
        <div
          key={`rank-${i}`}
          style={{
            transform: lgUp && i % 2 !== 0 ? "translateX(-130%)" : "none",
          }}
          className="min-w-[250px] my-[160px] w-1/3 border-separate border-spacing-2 border-4 border-[#c0f1a0] rounded-tr-3xl rounded-bl-3xl"
        >
          <p className="border border-slate-600 m-4 p-4 rounded-tr-3xl rounded-bl-3xl bg-[#b4e886]">
            <span>{rank}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
