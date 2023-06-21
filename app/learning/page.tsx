"use client";

import Image from "next/image";
import { Rating, Typography } from "@mui/material";
import YocaModal from "@/components/yoca-modal";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Learning() {
  const [modal, setModal] = useState(false);
  const router = useRouter();
  const handleClose = () => {
    setModal(false);
    return;
  };

  return (
    <>
      <div className="l1 image-container relative">
        <img src="/learning-01.jpg" alt="Homepage Image" />
      </div>
      <div className="flex h-screen">
        <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full max-w-screen-lg aspect-video"
          ></iframe>
        </div>
      </div>
      <div className="l1 image-container relative">
        <img src="/learning-02.jpg" alt="Homepage Image" />
      </div>
      <div className="l1 image-container relative flex justify-center">
        <Image
          width={400}
          height={400}
          src="/learning-feedback.png"
          alt="Homepage Image"
        />
      </div>
      <div className="w-full flex justify-center my-6">
        <button
          onClick={() => {
            setModal(true);
          }}
          className="font-inherit leading-4 m-0 overflow-visible uppercase appearance-none inline-block bg-[#beecac] text-white outline-none border-none text-xl p-12 md:text-2xl py-2 px-6 rounded-full cursor-pointer transition-all duration-200 ease-in-out relative"
        >
          SUBMIT
        </button>
      </div>

      <YocaModal
        state={modal}
        handleClose={handleClose}
        className="flex justify-end lg:justify-start flex-col-reverse lg:flex-row lg:max-w-[1062px] h-[500px]"
      >
        <div className="container px-10 mt-10">
          <style jsx global>{`
            .MuiRating-root {
              margin-top: 40px;
              margin-bottom: 40px;
            }

            .MuiRating-iconFilled {
              color: #c4eaa0;
            }

            .MuiRating-root span {
              font-size: 40px;
            }
            
            @media (min-width: 576px) {
              .MuiRating-root span {
                font-size: 60px;
              } 
            }
          `}</style>
          <Typography component="legend">
            <div className="l1 image-container relative flex items-center">
              <Image
                width={18}
                height={18}
                src="/learning_evaluation.png"
                alt="Homepage Image"
              />
              <span className="text-lg md:text-3xl text-[#77846e] ml-2">
                學到東西的多寡:
              </span>
            </div>
          </Typography>
          <Rating
            name="no-value"
            size="large"
            defaultValue={2.5}
            precision={0.5}
          />

          <Typography component="legend">
            <div className="l1 image-container relative flex items-center">
              <Image
                width={25}
                height={25}
                src="/learning_happiness.png"
                alt="Homepage Image"
              />
              <span className="text-lg md:text-3xl text-[#77846e] ml-2">
                學習開心的程度:
              </span>
            </div>
          </Typography>
          <Rating
            name="no-value"
            size="large"
            defaultValue={2.5}
            precision={0.5}
          />
          <div className="w-full flex justify-center my-6">
            <button
              onClick={() => {
                setModal(false);
                router.push("/")
              }}
              className="font-inherit leading-4 m-0 overflow-visible uppercase appearance-none inline-block bg-[#beecac] text-white outline-none border-none text-xl p-12 md:text-2xl py-2 px-6 rounded-full cursor-pointer transition-all duration-200 ease-in-out relative"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </YocaModal>
    </>
  );
}
