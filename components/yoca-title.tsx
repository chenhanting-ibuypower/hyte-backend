"use client";

import Image from "next/image";
import cn from "classnames";
export default function YocaTitle({
  title,
  label,
  subtitle,
  tree,
  className,
}: {
  title: string;
  label?: string;
  subtitle: string;
  tree: number;
  className?: string;
}) {
  return (
    <div className={cn("text-white", className || "w-[150px]")}>
      <style jsx>{`
        h1 {
          overflow: hidden;
          text-align: center;
        }

        h1:before,
        h1:after {
          background-color: #fff;
          content: "";
          display: inline-block;
          height: 1px;
          position: relative;
          vertical-align: middle;
          width: 50%;
        }

        h1:before {
          right: 0.5em;
          margin-left: -50%;
        }

        h1:after {
          left: 0.5em;
          margin-right: -50%;
        }
      `}</style>
      {label && (
        <div className="flex justify-end">
          <Image
            width={40}
            height={40}
            src="/yoca-comp/leaf-01.png"
            alt="Homepage Image"
          />
          <div className="">{label}</div>
          <Image
            width={40}
            height={40}
            src="/yoca-comp/leaf-01.png"
            alt="Homepage Image"
            className="transform scale-x-[-1]"
          />
        </div>
      )}
      <div className="flex items-center justify-center gap-x-4">
        {tree === 1 ? (
          <Image
            width={30}
            height={50}
            src="/yoca-comp/tree-01.png"
            alt="Homepage Image"
          />
        ) : tree === 2 ? (
          <Image
            width={30}
            height={50}
            src="/yoca-comp/tree-02.png"
            alt="Homepage Image"
          />
        ) : tree === 3 ? (
          <Image
            width={30}
            height={50}
            src="/yoca-comp/tree-03.png"
            alt="Homepage Image"
          />
        ) : (
          <></>
        )}
        <div className="text-2xl">{title}</div>
      </div>
      <div>
        <h1>{subtitle}</h1>
      </div>
    </div>
  );
}
