"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Topic } from "../../types/topics";

const Slider = ({ questions }: { questions: Topic[] }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const process = sliderRef.current;
    const sections = gsap.utils.toArray(".process__item");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: process,
        markers: false,
        scrub: 1,
        pin: true,
        snap: 1 / (sections.length - 1),
        // @ts-ignore
        end: () => "+=" + process.offsetWidth || 0,
      },
    });
  }, []);

  return (
    <section className="h-screen">
      <style jsx>{`
        .process-wrap {
          overflow: hidden;
        }
        .process {
          width: ${questions.length * 100}%;
          display: flex;
          -ms-flex-wrap: nowrap;
          flex-wrap: nowrap;
          align-self: center;
          height: 100vh !important;
        }

        .process__item {
          display: flex;
          align-items: center;
          padding: 0 100px;
        }

        .process__item span {
          font-size: 30px;
          display: block;
        }

        .empty {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>

      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <div className="empty">LET's GET StarTED</div>
      <div className="process-wrap">
        <div className="process" ref={sliderRef}>
          {questions.map((q, index) => (
            <div key={`card-${index}`} className="process__item w-screen">
              <p>
                <div>Q {index + 1}:</div>
                <div>{q.title}</div>
                <div className="mt-10">Subject: {q.subject}</div>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="empty">End Of the Lesson</div>
    </section>
  );
};

export default Slider;
