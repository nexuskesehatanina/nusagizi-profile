"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
    const autoScroll = React.useRef(
        AutoScroll({
            speed: 1.2,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
            stopOnFocusIn: false,
            playOnInit: true,
        }),
    );

    const [emblaRef] = useEmblaCarousel(
        {
            align: "start",
            loop: true,
            dragFree: true,
            watchDrag: false,
        },
        [autoScroll.current],
    );

    const displayTestimonials = [...testimonials, ...testimonials];

    return (
        <section id="testimoni" className="w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="text-center mb-8 sm:mb-12">
                <h2 className="sec-title text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F1F16]">Apa Kata Mereka Tentang NusaGizi?</h2>
            </div>

            {/* Carousel Viewport dengan Auto Infinite Smooth Scroll tak terputus */}
            <div ref={emblaRef} className="overflow-hidden select-none py-2">
                <div className="flex -ml-6 sm:-ml-7 lg:-ml-8">
                    {displayTestimonials.map((t, idx) => (
                        <div
                            key={`${t.name}-${idx}`}
                            className="flex-[0_0_88%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333333%] min-w-0 pl-6 sm:pl-7 lg:pl-8 flex"
                        >
                            <article className="w-full bg-white border-[1.5px] border-dashed border-[#CFDBD2] rounded-[20px] p-6 flex flex-col justify-between text-left">
                                <div>
                                    {/* Quote Icon Hijau */}
                                    <div className="mb-3.5">
                                        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0 11.43C0 5.11 4.34 0.77 10.66 0v4.57C7.2 4.57 5.37 6.4 5.14 9.14h5.52V20H0v-8.57zm13.34 0C13.34 5.11 17.69 0.77 24 0v4.57c-3.46 0-5.29 1.83-5.51 4.57H24V20H13.34v-8.57z"
                                                fill="#159549"
                                            />
                                        </svg>
                                    </div>

                                    {/* Pill Badge Perspektif */}
                                    <span className="inline-block self-start text-[11px] font-bold tracking-wider uppercase text-[#4E6155] bg-[#EDF3EF] px-3 py-1 rounded-full mb-4">
                                        {t.slot}
                                    </span>

                                    {/* Teks Kutipan */}
                                    <blockquote className="m-0 text-[#4B5563] text-[15px] sm:text-[15.5px] leading-[1.65] font-normal text-left">
                                        {t.quote}
                                    </blockquote>
                                </div>

                                {/* Divider & Info Profil */}
                                <div className="mt-6 pt-4 border-t border-[#EEF3F0] flex items-center gap-3.5 text-left">
                                    <div className="w-10.5 h-10.5 shrink-0 flex items-center justify-center">
                                        <Image
                                            src="/women_profile.jpg"
                                            alt={t.name}
                                            width={42}
                                            height={42}
                                            className="w-10.5 h-10.5 object-contain"
                                        />
                                    </div>
                                    <div className="flex flex-col text-left min-w-0">
                                        <b className="text-[#0F1F16] font-bold text-[14px] sm:text-[14.5px] leading-tight truncate">{t.name}</b>
                                        <small className="text-[#6B7280] text-[12px] sm:text-[12.5px] leading-tight mt-1">{t.role}</small>
                                    </div>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
