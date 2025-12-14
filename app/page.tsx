"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const images = [
    {
        src: "/img1.jpg",
    },
    {
        src: "/img2.jpg",
    },
    {
        src: "/img3.jpg",
    },
    {
        src: "/img4.jpg",
    },
];

export default function Page() {
    useGSAP(() => {
        gsap.utils.toArray<HTMLElement>(".parallax-container").forEach((container) => {
            const img = container.querySelector("img");

            gsap.fromTo(
                img,
                {
                    yPercent: -20,
                },
                {
                    yPercent: 20,
                    ease: "none",
                    scrollTrigger: {
                        trigger: container,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            );
        });
    });

    return (
        <main className="my-[10svh] flex w-full flex-col items-center justify-center gap-2">
            {images.map((img, index) => (
                <div
                    key={index}
                    className="parallax-container flex h-[80svh] w-[80%] lg:w-1/3 items-center overflow-hidden"
                >
                    <div className="parallax-image-wrapper relative h-[120%] w-full">
                        <Image src={img.src} alt="some desc" fill sizes="100vw" className="object-cover" />
                    </div>
                </div>
            ))}
        </main>
    );
}
