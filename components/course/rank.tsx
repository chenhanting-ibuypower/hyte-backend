"use client";

import { useMedia } from "react-use";
import cn from "classnames";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Rank() {
  const ranks = [
    {
      rank: "Easy",
      description:
        "Develop a program to calculate the sum of numbers in an array.",
    },
    {
      rank: "Normal",
      description:
        "Implement a sorting algorithm to sort an array of integers in ascending order.",
    },
    {
      rank: "Hard",
      description:
        "Create a program to solve the Tower of Hanoi puzzle for a given number of disks.",
    },
    {
      rank: "Expert",
      description:
        "Develop an algorithm to generate permutations of a given set of elements.",
    },
    {
      rank: "Master",
      description:
        "Develop an algorithm to solve the traveling salesman problem.",
    },
  ];
  const lgUp = useMedia("(min-width: 1024px)", false); // Initialize with fallback value
  const roundedAngle = (index: number) =>
    lgUp && index % 2 !== 0
      ? "rounded-bl-3xl rounded-tr-3xl border-l-4"
      : "rounded-br-3xl rounded-tl-3xl border-r-4";

  return (
    <div className="absolute top-0 left-[25%] sm:left-[15%] md:left-[10%] lg:left-[55%] mt-8">
      {ranks.map((rank, i) => (
        <div
          key={`rank-${i}`}
          style={{
            transform: lgUp && i % 2 !== 0 ? "translateX(-130%)" : "none",
          }}
          className={cn(
            "min-w-[200px] sm:min-w-[400px] md:min-w-2/3 my-[160px] w-1/3 border-separate border-spacing-2 border border-t-4 border-[#c0f1a0]",
            roundedAngle(i)
          )}
        >
          <p
            className={cn(
              "border border-green-400 m-4 p-4 bg-[#b4e886]",
              roundedAngle(i)
            )}
          >
            <span>
              RANK {i + 1}: {rank.rank}
            </span>
            <div className="my-4">{rank.description}</div>
          </p>
        </div>
      ))}
    </div>
  );
}